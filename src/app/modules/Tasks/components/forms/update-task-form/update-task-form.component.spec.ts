import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskFormComponent } from './update-task-form.component';

describe('UpdateTaskFormComponent', () => {
  let component: UpdateTaskFormComponent;
  let fixture: ComponentFixture<UpdateTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTaskFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
