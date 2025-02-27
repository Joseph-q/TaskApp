import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardTasksComponent } from './dash-board-tasks.component';

describe('DashBoardTasksComponent', () => {
  let component: DashBoardTasksComponent;
  let fixture: ComponentFixture<DashBoardTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBoardTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoardTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
