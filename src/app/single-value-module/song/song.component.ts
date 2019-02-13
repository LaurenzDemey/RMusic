import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MusicService } from '../player/service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongComponent {
  @Input()
  img: string;

  @Input()
  name: string;

  @Input()
  artist: number;

  @Input()
  id: number;

  @Input()
  type: string;

  playSongIcon = faPlay;

  constructor(private musicService: MusicService) {}

  play() {
    if (this.id && this.type) {
      const playerInfo = {
        id: this.id,
        type: this.type
      };

      this.musicService.selectedTracklist(playerInfo);
    }
  }
}
