import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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

  playSongIcon = faPlay;

  play() {
    // do something
  }
}
