import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieCastComponent } from './add-movie-cast.component';

describe('AddMovieCastComponent', () => {
  let component: AddMovieCastComponent;
  let fixture: ComponentFixture<AddMovieCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
