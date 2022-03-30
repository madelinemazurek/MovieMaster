import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieWriterComponent } from './add-movie-writer.component';

describe('AddMovieWriterComponent', () => {
  let component: AddMovieWriterComponent;
  let fixture: ComponentFixture<AddMovieWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
