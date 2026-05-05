import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}