import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageInterface } from 'src/app/interfaces/interfaces';

@Injectable()
export class JokesMediaService {
  private mediaUrl = environment.mediaUrl;
  private imageData: ImageInterface[];

  constructor(private http: HttpClient) {}

  get getImageInfo(): ImageInterface[] {
    return this.imageData;
  }

  setImageData(image: ImageInterface[]): void {
    this.imageData = image;
  }

  getImageData(names: string): Observable<ImageInterface> {
    return this.http.post<ImageInterface>(
      `${this.mediaUrl}?fileExtencion=${names}`,
      names
    );
  }
  putImage(image: File, ulr: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-ms-blob-type': 'BlockBlob',
      skipInterceptor: 'true'
    });
    return this.http.put<ImageInterface>(ulr, image, { headers });
  }
}
