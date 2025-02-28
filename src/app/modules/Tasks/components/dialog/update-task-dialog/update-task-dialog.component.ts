import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { GetTaskResponse } from '../../../../../core/services/tasks/interfaces/response/GetTaskResponse.interface';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../../../../../core/services/tasks/task.service';

@Component({
  selector: 'app-update-task-dialog',
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
  templateUrl: './update-task-dialog.component.html',
  styleUrl: './update-task-dialog.component.scss',
})
export class UpdateTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UpdateTaskDialogComponent>);
  readonly data = inject<GetTaskResponse>(MAT_DIALOG_DATA);

  protected todoForm: FormGroup = new FormGroup({
    title: new FormControl(this.data.title, [Validators.required]),
    description: new FormControl(this.data.description, [Validators.required]),
  });

  constructor(private readonly taskService: TaskService) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.todoForm.valid) {
      this.taskService.UpdateTask(this.data.id, {
        title: this.todoForm.get('title')?.value,
        description: this.todoForm.get('description')?.value,
      }).subscribe({
        complete: () => {
          this.dialogRef.close();
        },
      });
    }
  }
}
