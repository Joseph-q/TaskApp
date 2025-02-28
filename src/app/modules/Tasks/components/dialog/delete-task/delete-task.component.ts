import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { TaskService } from '../../../../../core/services/tasks/task.service';
import { GetTaskResponse } from '../../../../../core/services/tasks/interfaces/response/GetTaskResponse.interface';

@Component({
  selector: 'app-delete-task',
  imports: [MatDialogContent, MatDialogActions, MatButtonModule],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.scss',
})
export class DeleteTaskComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteTaskComponent>);
  readonly data = inject<GetTaskResponse>(MAT_DIALOG_DATA);

  constructor(private readonly taskService: TaskService) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  OnDelete() {
    this.taskService.DeleteTask(this.data.id).subscribe(
      {
        complete:()=>{
          this.onCancel()
        }
      }
    );
  }
}
