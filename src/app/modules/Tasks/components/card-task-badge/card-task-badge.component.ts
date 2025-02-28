import { Component, Input } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { GetTaskResponse } from '../../../../core/services/tasks/interfaces/response/GetTaskResponse.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-task-badge',
  imports: [MatListItem, DatePipe],
  templateUrl: './card-task-badge.component.html',
  styleUrl: './card-task-badge.component.scss'
})
export class CardTaskBadgeComponent {
  @Input({required:true}) task!: GetTaskResponse
  @Input() date :Date = new Date()
}
