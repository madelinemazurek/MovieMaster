import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieDirectorComponent } from './add-movie-director.component';

describe('AddMovieDirectorComponent', () => {
  let component: AddMovieDirectorComponent;
  let fixture: ComponentFixture<AddMovieDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
