import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { UpdateTaskFormComponent } from '../../forms/update-task-form/update-task-form.component';

@Component({
  selector: 'app-update-task-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    UpdateTaskFormComponent,
  ],
  templateUrl: './update-task-dialog.component.html',
  styleUrl: './update-task-dialog.component.scss',
})
export class UpdateTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UpdateTaskDialogComponent>);
  readonly data = inject<{ idTask: number }>(MAT_DIALOG_DATA);

  readonly idTask= this.data.idTask;


  @ViewChild(UpdateTaskFormComponent)
  addTaskFormComponent!: UpdateTaskFormComponent;

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.addTaskFormComponent.onSubmit();
  }
}
