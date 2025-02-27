import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-item',
  imports: [MatCheckboxModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() idTask: number = 0;
  @Output() change = new EventEmitter<number>();

  onChangeCheckBox() {
    this.change.emit(this.idTask);
  }
}
