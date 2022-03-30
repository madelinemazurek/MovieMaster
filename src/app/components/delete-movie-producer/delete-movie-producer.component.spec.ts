import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieProducerComponent } from './delete-movie-producer.component';

describe('DeleteMovieProducerComponent', () => {
  let component: DeleteMovieProducerComponent;
  let fixture: ComponentFixture<DeleteMovieProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieProducerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
