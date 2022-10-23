import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOG_API_URL, DogImageRest, DogItemRest } from "./shared/models/dogItem.model";

@Injectable({
  providedIn: 'root',
})

export class DogRestService {
  constructor(private httpClient: HttpClient) {
  }

  getDogs(): Observable<DogItemRest> {
    return (this.httpClient.get(DOG_API_URL + '/breeds/list/all') as Observable<DogItemRest>);
  }

  getImages(breedName: string): Observable<DogImageRest> {
    return (this.httpClient
      .get(DOG_API_URL + `/breed/${breedName}/images`) as Observable<DogImageRest>);
  }
}
