import { Component, inject, ViewChild, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../../../../core/services/tasks/task.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-task-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss',
})
export class AddTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddTaskDialogComponent>);

  protected todoForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private readonly taskService: TaskService) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.todoForm.valid) {
      this.taskService
        .AddTask({
          title: this.todoForm.get('title')?.value,
          description: this.todoForm.get('description')?.value,
        })
        .subscribe({
          complete: () => {
            this.dialogRef.close();
          },
        });
    }
  }
}
