import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTaskBadgeComponent } from './card-task-badge.component';

describe('CardTaskBadgeComponent', () => {
  let component: CardTaskBadgeComponent;
  let fixture: ComponentFixture<CardTaskBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTaskBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTaskBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
