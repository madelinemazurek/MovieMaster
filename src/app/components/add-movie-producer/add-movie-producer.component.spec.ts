import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieProducerComponent } from './add-movie-producer.component';

describe('AddMovieProducerComponent', () => {
  let component: AddMovieProducerComponent;
  let fixture: ComponentFixture<AddMovieProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieProducerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
