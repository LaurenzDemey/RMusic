import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ALBUM_SERVICE, IAlbum, IAlbumService } from '../api';

@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.scss']
})
export class HotlistComponent implements OnInit {
  album$: Observable<IAlbum>;

  constructor(@Inject(ALBUM_SERVICE) private albumServic: IAlbumService) {}

  ngOnInit() {
    this.album$ = this.albumServic.getAlbumById(302127);
  }
}
