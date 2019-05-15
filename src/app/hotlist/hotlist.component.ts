import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../api';
import { AlbumService } from '../api/fake-api/album.service';

@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.scss']
})
export class HotlistComponent implements OnInit {
  album$: Observable<IAlbum[]>;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.album$ = this.albumService.getAlbums();
  }
}
