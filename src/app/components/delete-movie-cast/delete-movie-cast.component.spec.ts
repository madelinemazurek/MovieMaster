import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieCastComponent } from './delete-movie-cast.component';

describe('DeleteMovieCastComponent', () => {
  let component: DeleteMovieCastComponent;
  let fixture: ComponentFixture<DeleteMovieCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMovieCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
