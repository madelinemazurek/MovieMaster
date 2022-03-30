import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShowsComponent } from './delete-shows.component';

describe('DeleteShowsComponent', () => {
  let component: DeleteShowsComponent;
  let fixture: ComponentFixture<DeleteShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
