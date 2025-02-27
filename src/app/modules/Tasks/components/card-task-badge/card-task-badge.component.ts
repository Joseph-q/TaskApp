import { Component, Input } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-task-badge',
  imports: [MatListItem, RouterLink],
  templateUrl: './card-task-badge.component.html',
  styleUrl: './card-task-badge.component.scss'
})
export class CardTaskBadgeComponent {
  @Input({required:true}) title:string =""
  @Input() dateString :string = ""

  @Input() date :Date = new Date()
}
