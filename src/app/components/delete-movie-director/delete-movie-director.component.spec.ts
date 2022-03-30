import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieDirectorComponent } from './delete-movie-director.component';

describe('DeleteMovieDirectorComponent', () => {
  let component: DeleteMovieDirectorComponent;
  let fixture: ComponentFixture<DeleteMovieDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
