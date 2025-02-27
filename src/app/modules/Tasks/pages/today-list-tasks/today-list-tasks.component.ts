import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TaskItemComponent } from "../../components/task-item/task-item.component";

@Component({
  selector: 'app-today-list-tasks',
  imports: [MatCheckboxModule, TaskItemComponent],
  templateUrl: './today-list-tasks.component.html',
  styleUrl: './today-list-tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayListTasksComponent {
  



  onChangeCheckBox(id :number){

  }
}
