import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShowroomComponent } from './delete-showroom.component';

describe('DeleteShowroomComponent', () => {
  let component: DeleteShowroomComponent;
  let fixture: ComponentFixture<DeleteShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteShowroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
