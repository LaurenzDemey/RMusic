import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
}
