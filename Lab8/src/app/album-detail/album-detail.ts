import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  saveChanges(): void {
    if (this.album) {
      const updated = { ...this.album, title: this.newTitle };
      this.albumService.updateAlbum(updated).subscribe(response => {
        this.album = response;
        alert('Saved successfully!');
      });
    }
  }
}
