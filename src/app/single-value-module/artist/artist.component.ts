import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MusicService } from '../player/service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistComponent {
  @Input()
  img: string;

  @Input()
  name: string;

  @Input()
  followers: number;

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
