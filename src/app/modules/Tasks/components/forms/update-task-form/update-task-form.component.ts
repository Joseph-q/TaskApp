import { Component, Input, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../../../core/services/tasks/task.service';
import { map } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-update-task-form',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-task-form.component.html',
  styleUrl: './update-task-form.component.scss',
})
export class UpdateTaskFormComponent implements OnDestroy {
  todoForm!: FormGroup;

  @Input({ required: true }) idTask!: number;
  constructor(
    private fb: FormBuilder,
    private readonly _taskService: TaskService
  ) {
    _taskService
      .GetTaskById(this.idTask)
      .pipe(
        map((t) => {
          this.todoForm = this.fb.group({
            title: [t.title, Validators.required],
            description: [t.description],
          });
        })
      )
      .subscribe();
  }

  onSubmit() {
    this._taskService.UpdateTask(this.idTask, {
      title: this.todoForm.get('title')?.value,
      description: this.todoForm.get('name')?.value,
    });
  }

  ngOnDestroy(): void {}
}
