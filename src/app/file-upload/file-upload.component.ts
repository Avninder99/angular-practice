import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  myUploadForm: FormGroup;
  selectedFile: File | null = null;
  imageUrl: string | null = null;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myUploadForm = this.formBuilder.group({
      image: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    // this.myUploadForm = new FormGroup({
    //   file: new FormControl(null)
    // })
  }

  
  uploadFile(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitForm() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      this.http.post<any>('http://localhost:5000/api/upload', formData).subscribe((response) => {
        this.imageUrl = response.imageUrl;
      });
    }
  }
}
