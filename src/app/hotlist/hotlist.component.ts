import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum, IAlbumService, IPlaylist, IPlaylistService } from '../api';
import { ALBUM_SERVICE, PLAYLIST_SERVICE } from '../api/injection-tokens';

@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.scss']
})
export class HotlistComponent implements OnInit {
  album$: Observable<IAlbum[]>;
  public playlistTracks$: Observable<IPlaylist>;

  constructor(
    @Inject(ALBUM_SERVICE) private albumServic: IAlbumService,
    @Inject(PLAYLIST_SERVICE) private playlistService: IPlaylistService
  ) {}

  ngOnInit() {
    this.album$ = this.albumServic.getAlbums();

    this.playlistTracks$ = this.playlistService.getPlaylist('1266968331');
  }
}
