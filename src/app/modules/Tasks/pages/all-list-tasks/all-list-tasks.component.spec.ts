import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListTasksComponent } from './all-list-tasks.component';

describe('AllListTasksComponent', () => {
  let component: AllListTasksComponent;
  let fixture: ComponentFixture<AllListTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllListTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
