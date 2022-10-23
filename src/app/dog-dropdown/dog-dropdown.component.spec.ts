import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDropdownComponent } from './dog-dropdown.component';

describe('DogDropdownComponent', () => {
  let component: DogDropdownComponent;
  let fixture: ComponentFixture<DogDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
