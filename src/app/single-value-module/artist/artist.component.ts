import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
}
