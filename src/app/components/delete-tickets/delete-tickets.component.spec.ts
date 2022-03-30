import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTicketsComponent } from './delete-tickets.component';

describe('DeleteTicketsComponent', () => {
  let component: DeleteTicketsComponent;
  let fixture: ComponentFixture<DeleteTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
