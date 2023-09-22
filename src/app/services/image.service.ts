import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseURL = 'http://localhost:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  addImage(profileImage: File): Observable<any> {
    var formData: any = new FormData();
    console.log(profileImage)
    formData.append('file', profileImage);
    console.log(formData)
    return this.http.post(`${this.baseURL}/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
