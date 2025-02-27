import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../../../core/services/tasks/task.service';

@Component({
  selector: 'app-add-task-form',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss',
})
export class AddTaskFormComponent {
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly _taskService: TaskService
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this._taskService.AddTask({
        title: this.todoForm.get('title')?.value,
        description: this.todoForm.get('name')?.value,
      });
    }
  }
}
