import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Photo } from '../models/photo.model';
import { AlbumService } from '../services/album';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
    });
  }
}
