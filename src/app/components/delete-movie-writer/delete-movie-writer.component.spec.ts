import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieWriterComponent } from './delete-movie-writer.component';

describe('DeleteMovieWriterComponent', () => {
  let component: DeleteMovieWriterComponent;
  let fixture: ComponentFixture<DeleteMovieWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
