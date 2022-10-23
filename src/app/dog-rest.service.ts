import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const API_URL = 'https://dog.ceo/api';

@Injectable({
  providedIn: 'root',
})
export class DogRestService {
  constructor(private httpClient: HttpClient) {}

  getDogs(): Observable<any> {
    return this.httpClient.get(API_URL + '/breeds/list/all');
  }

  getImages(breedName: string): Observable<any> {
    return this.httpClient
      .get(API_URL + `/breed/${breedName}/images`)
      .pipe(map((imageList: any) => imageList.message[0]));
  }
}
