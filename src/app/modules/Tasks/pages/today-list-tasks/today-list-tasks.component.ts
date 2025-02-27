import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { TaskService } from '../../../../core/services/tasks/task.service';
import { Observable } from 'rxjs';
import { GetTaskResponse } from '../../../../core/services/tasks/interfaces/response/GetTaskResponse.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-today-list-tasks',
  imports: [MatCheckboxModule, TaskItemComponent, AsyncPipe],
  templateUrl: './today-list-tasks.component.html',
  styleUrl: './today-list-tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayListTasksComponent implements OnInit {
  constructor(private readonly taskService: TaskService) {}

  public tasks$!: Observable<GetTaskResponse[]>;

  ngOnInit(): void {
    this.tasks$ = this.taskService.GetAllTasks();
  }

  
}
