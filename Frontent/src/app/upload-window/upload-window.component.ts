import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-window',
  templateUrl: './upload-window.component.html',
  styleUrls: ['./upload-window.component.scss']
})
export class UploadWindowComponent {

  fileName = '';

  @Output() onHideOverlay = new EventEmitter<null>();

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {

    const result = (event.target as HTMLInputElement).files
    if (null == result) return;

    let file = result[0];
    if (null == file) return;

    this.fileName = file.name;

    const formData = new FormData();
    formData.append("thumbnail", file);

    const upload$ = this.http.post("/api/thumbnail-upload", formData);

    upload$.subscribe();
  }
}
