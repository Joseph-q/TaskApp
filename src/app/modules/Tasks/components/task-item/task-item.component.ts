import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GetTaskResponse } from '../../../../core/services/tasks/interfaces/response/GetTaskResponse.interface';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../../../core/services/tasks/task.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskDialogComponent } from '../dialog/update-task-dialog/update-task-dialog.component';

@Component({
  selector: 'app-task-item',
  imports: [MatCheckboxModule, DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  readonly dialog = inject(MatDialog)

  @Input({ required: true }) taskItem!: GetTaskResponse;
  @Output() change = new EventEmitter<number>();

  constructor(private readonly taskService: TaskService) {}

  onChangeCheckBox() {
    this.taskService.UpdateTask(this.taskItem.id, {
      isCompleted: !(this.taskItem.isCompleted),
    }).subscribe();
  }

  onUpdate() {
    this.dialog.open(UpdateTaskDialogComponent,{
      width:"40%",
      data : this.taskItem
    })
  }
}
