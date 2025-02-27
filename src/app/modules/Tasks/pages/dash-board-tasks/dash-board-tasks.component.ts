import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from "../../sections/side-nav/side-nav.component";

@Component({
  selector: 'app-dash-board-tasks',
  imports: [MatSidenavModule, MatButtonModule, RouterOutlet, SideNavComponent],
  templateUrl: './dash-board-tasks.component.html',
  styleUrl: './dash-board-tasks.component.scss',
})
export class DashBoardTasksComponent {}
