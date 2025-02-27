import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayListTasksComponent } from './today-list-tasks.component';

describe('TodayListTasksComponent', () => {
  let component: TodayListTasksComponent;
  let fixture: ComponentFixture<TodayListTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayListTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
