import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SecondSectionComponent } from "../second-section/second-section.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SecondSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
