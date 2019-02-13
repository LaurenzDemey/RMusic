import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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

  playSongIcon = faPlay;

  play() {
    // do something
  }
}
