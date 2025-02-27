import { Component, EventEmitter, Output } from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { CardTaskBadgeComponent } from "../../components/card-task-badge/card-task-badge.component";

@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatListModule, RouterLink, CardTaskBadgeComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Output() showModal = new EventEmitter<void>();

}
