import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSystemAdminComponent } from './delete-system-admin.component';

describe('DeleteSystemAdminComponent', () => {
  let component: DeleteSystemAdminComponent;
  let fixture: ComponentFixture<DeleteSystemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSystemAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSystemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
