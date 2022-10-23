import { Component, OnInit } from '@angular/core';
import { DogRestService } from '../dog-rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dog-dropdown',
  templateUrl: './dog-dropdown.component.html',
  styleUrls: ['./dog-dropdown.component.scss'],
})
export class DogDropdownComponent implements OnInit {
  dogList: any;
  dogImageUrl: any;
  selectedDog: any;

  constructor(private dogRestService: DogRestService) {}

  ngOnInit(): void {
    this.dogRestService.getDogs().subscribe(({ message }) => {
      this.dogList = Object.keys(message);
    });

    this.dogRestService.getImages('boxer').subscribe((image) => {
      this.dogImageUrl = image;
    });
  }

  getDynamicDogImage(breedName: string): Observable<any> {
    console.log(breedName);
    return this.dogRestService.getImages(breedName);
  }

  onSelectedDog(event: any) {
    this.selectedDog = event.value;
  }
}
