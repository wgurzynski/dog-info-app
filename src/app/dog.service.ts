import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from "rxjs";
import { DogRestService } from "./dog-rest.service";
import { DogImageRest, DogItemRest } from "./shared/models/dogItem.model";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private selectedDogSub$ = new BehaviorSubject<string>('affenpinscher');
  selectedDog$ = this.selectedDogSub$.asObservable();

  constructor(private dogRestService: DogRestService) {
  }

  getDogs(): Observable<DogItemRest> {
    return this.dogRestService.getDogs()
  }

  getImages(breedName: string): Observable<string> {
    return this.dogRestService.getImages(breedName)
      .pipe(
        map((imageList: DogImageRest) => imageList.message[0]));
  }

  setSelectedDog(breed: string): void {
    this.selectedDogSub$.next(breed);
  }

}
