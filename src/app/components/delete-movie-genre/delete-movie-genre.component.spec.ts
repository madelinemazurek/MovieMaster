import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieGenreComponent } from './delete-movie-genre.component';

describe('DeleteMovieGenreComponent', () => {
  let component: DeleteMovieGenreComponent;
  let fixture: ComponentFixture<DeleteMovieGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
