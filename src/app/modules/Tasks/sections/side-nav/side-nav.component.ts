import { Component } from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule ,MatButtonModule, MatToolbarModule , MatListModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

}
