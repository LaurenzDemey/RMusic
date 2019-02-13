import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faPause,
  faPlay,
  faPlus,
  faRandom,
  faSlidersH,
  faStepBackward,
  faStepForward,
  faVolumeMute,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, combineLatest, fromEvent, merge, Observable, Subject } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  scan,
  shareReplay,
  startWith,
  tap
} from 'rxjs/operators';
import { ITrack } from 'src/app/api';
import { MusicService } from './service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  //#region Icons
  previousIcon = faStepBackward;
  playIcon = faPlay;
  nextIcon = faStepForward;
  pauseIcon = faPause;
  addToPlaylistIcon = faPlus;
  loveIcon = faHeart;
  shuffleIcon = faRandom;
  volumeOnIcon = faVolumeUp;
  muteIcon = faVolumeMute;
  audioSettingsIcon = faSlidersH;
  //#endregion

  isPlaying$: Observable<boolean>;
  noNext = true;
  noPrevious = true;
  isMuted: boolean;

  minSongTime$: Observable<string>;
  maxSongTime$: Observable<string>;
  maxTime$: Observable<number>;
  elapsed$: Observable<number>;
  currentSongTime$: Observable<number>;
  minTime = 0;
  currentPlayingIndex$: Subject<{ [key: string]: string | number }>;

  queueList$: Observable<ITrack[]>;
  audioPlaying$: Observable<ITrack>;

  play$ = new Subject();
  pause$ = new Subject();

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.registerAudioEvents();

    this.currentPlayingIndex$ = new BehaviorSubject<{ [key: string]: string | number }>({
      state: 'initial',
      i: 0
    });

    this.queueList$ = this.musicService.getCurrentTrackList().pipe(
      distinctUntilChanged(),
      tap(tracks => {
        if (tracks && tracks.length > 1) {
          this.noNext = false;
        }
      }),
      shareReplay(1)
    );

    this.musicProcessPlayer();
  }

  play() {
    if (this.musicService.audio.paused && this.musicService.audio.src) {
      this.play$.next();
      this.musicService.audio.play();
    }
  }

  pause() {
    if (!this.musicService.audio.paused) {
      this.pause$.next();
      this.musicService.audio.pause();
    }
  }

  next() {
    this.currentPlayingIndex$.next({ state: 'next', i: 1 });
  }

  previous() {
    this.currentPlayingIndex$.next({ state: 'previous', i: -1 });
  }

  private musicProcessPlayer() {
    const currenIndexScanner$ = this.currentPlayingIndex$.pipe(
      scan(
        (acc, current) => {
          if (current.state === 'initial') {
            return {
              state: current.state,
              i: acc.i + current.i
            };
          } else if (current.state === 'next') {
            return {
              state: current.state,
              i: acc.i + current.i
            };
          }
          return {
            state: current.state,
            i: acc.i + current.i
          };
        },
        { state: 'initial', i: 0 }
      )
    );

    this.audioPlaying$ = combineLatest(this.queueList$, currenIndexScanner$).pipe(
      map(([tracks, currentState]) => {
        let playingTrack: ITrack;

        const currentIndx = tracks.indexOf(tracks[currentState.i]);

        if (currentIndx > -1) {
          if (tracks[currentIndx].preview) {
            this.musicService.play(tracks[currentIndx]);
            playingTrack = tracks[currentIndx];
            debugger;
          } else {
            this.noMp3AudioHandler(currentState.state);
          }
          this.previousNextBtnHandler(currentState.state, currentIndx);
          return playingTrack;
        } else {
          this.previousNextBtnHandler(currentState.state, currentIndx);
          return playingTrack;
        }
      })
    );
  }

  private noMp3AudioHandler(state: string) {
    if (state === 'next') {
      this.next();
    } else if (state === 'previous') {
      this.previous();
    }
  }

  private previousNextBtnHandler(actionState: string, index: number) {
    if (actionState === 'next') {
      index > -1 ? (this.noPrevious = false) : (this.noNext = true);
    } else if (actionState === 'previous') {
      index > -1 ? (this.noNext = false) : (this.noPrevious = true);
    }
  }

  private registerAudioEvents() {
    const update$ = fromEvent(this.musicService.audio, 'timeupdate');

    this.maxTime$ = update$.pipe(
      map(_ => this.musicService.audio.duration),
      filter(x => !Number.isNaN(x))
    );

    this.elapsed$ = update$.pipe(
      map(_ => this.musicService.audio.currentTime),
      filter(x => !Number.isNaN(x))
    );

    this.currentSongTime$ = combineLatest(this.elapsed$, this.maxTime$).pipe(
      map(([elapsed, maxTime]) => elapsed / maxTime)
    );

    this.minSongTime$ = this.elapsed$.pipe(map(elapsed => this.musicService.formatTime(elapsed)));
    this.maxSongTime$ = this.maxTime$.pipe(map(maxTime => this.musicService.formatTime(maxTime)));

    const audioEnded$ = fromEvent(this.musicService.audio, 'ended').pipe(
      mapTo(false),
      delay(1000),
      tap(_ => this.next())
    );
    const audioPlay$ = fromEvent(this.musicService.audio, 'play').pipe(mapTo(true));
    const onPause$ = this.pause$.pipe(mapTo(false));
    const onPlay$ = this.play$.pipe(mapTo(true));
    this.isPlaying$ = merge(audioEnded$, audioPlay$, onPause$, onPlay$).pipe(startWith(false));
  }
}
