import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MusicService } from '../player/service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent {
  @Input()
  img: string;

  @Input()
  name: string;

  @Input()
  artist: string;

  @Input()
  type: string;

  @Input()
  tracklist: string;

  playSongIcon = faPlay;

  constructor(private musicService: MusicService) {}

  play() {
    if (this.type && this.tracklist) {
      const playerInfo = {
        type: this.type,
        tracklist: this.tracklist
      };

      this.musicService.selectedTracklist(playerInfo);
    }
  }
}
