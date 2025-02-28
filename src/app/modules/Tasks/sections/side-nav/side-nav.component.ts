import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { CardTaskBadgeComponent } from '../../components/card-task-badge/card-task-badge.component';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../../components/dialog/add-task-dialog/add-task-dialog.component';
import { GetTaskResponse } from '../../../../core/services/tasks/interfaces/response/GetTaskResponse.interface';
import { Observable } from 'rxjs';
import { TaskService } from '../../../../core/services/tasks/task.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    CardTaskBadgeComponent,
    AsyncPipe
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

  tasks$!: Observable<GetTaskResponse[]>;

  constructor(private readonly taskService: TaskService) {
    this.tasks$ = this.taskService.GetAllTasks({
      page: 1,
      limit: 100,
      updatedAt: new Date().toISOString().split('T')[0],
    });
  }

  readonly dialog = inject(MatDialog);

  @Output() showModal = new EventEmitter<void>();

  AddTask() {
      this.dialog.open(AddTaskDialogComponent,{
          width:"40%"
        })
  }
}
