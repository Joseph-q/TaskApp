import { Component, inject, ViewChild, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { AddTaskFormComponent } from '../../forms/add-task-form/add-task-form.component';

@Component({
  selector: 'app-add-task-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    AddTaskFormComponent
],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddTaskDialogComponent>);

  @ViewChild(AddTaskFormComponent) addTaskFormComponent!: AddTaskFormComponent;

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.addTaskFormComponent.onSubmit();
  }
}
