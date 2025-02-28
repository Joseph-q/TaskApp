import { Component } from '@angular/core';
import { TaskService } from '../../../../core/services/tasks/task.service';
import { GetTaskResponse } from '../../../../core/services/tasks/interfaces/response/GetTaskResponse.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-all-list-tasks',
  imports: [MatCheckboxModule, TaskItemComponent, AsyncPipe],
  templateUrl: './all-list-tasks.component.html',
  styleUrl: './all-list-tasks.component.scss',
})
export class AllListTasksComponent {
  constructor(private readonly taskService: TaskService) {}

  public tasks$!: Observable<GetTaskResponse[]>;

  ngOnInit(): void {
    const createdAt = new Date().toISOString().split('T')[0];
    this.tasks$ = this.taskService.GetAllTasks({
      page: 1,
      limit: 100,
    });
  }
}
