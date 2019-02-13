import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistComponent {
  @Input()
  img: string;

  @Input()
  name: string;

  @Input()
  totalTracks: number;

  playSongIcon = faPlay;

  play() {
    // do something
  }
}
