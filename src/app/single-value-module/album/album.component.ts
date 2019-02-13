import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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

  playSongIcon = faPlay;

  play() {
    // do something
  }
}
