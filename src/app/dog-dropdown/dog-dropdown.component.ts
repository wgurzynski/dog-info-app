import { Component, OnInit } from '@angular/core';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DogService } from "../dog.service";

@Component({
  selector: 'app-dog-dropdown',
  templateUrl: './dog-dropdown.component.html',
  styleUrls: ['./dog-dropdown.component.scss'],
})
export class DogDropdownComponent implements OnInit {
  dogList: string[] = [];
  selectedDog = this.dogService.selectedDog$;
  selectedDogImage: string = '';
  selectedDogWikiPageUrl: string = '';
  destroySub$ = new Subject<void>();

  constructor(private dogService: DogService) {
  }

  ngOnInit(): void {
    this.setDogList();

    this.dogService.selectedDog$.pipe(
      takeUntil(this.destroySub$),
      tap((breed) => {
        this.selectedDogWikiPageUrl = `http://en.wikipedia.org/wiki/${breed}`
      }),
      switchMap((breed) =>
        this.dogService.getImages(breed)
      )
    ).subscribe((image => {
      this.selectedDogImage = image
    }))

  }

  onSelectedDog(event: any): void {
    this.dogService.setSelectedDog(event.value);
  }

  private setDogList(): void {
    this.dogService.getDogs().pipe(
      takeUntil(this.destroySub$)
    ).subscribe(({message}) => {
      this.dogList = Object.keys(message);
    });
  }

  onNavigate(): void {
    window.open(this.selectedDogWikiPageUrl, "_blank");
  }
}
