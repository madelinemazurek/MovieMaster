import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieGenreComponent } from './add-movie-genre.component';

describe('AddMovieGenreComponent', () => {
  let component: AddMovieGenreComponent;
  let fixture: ComponentFixture<AddMovieGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
