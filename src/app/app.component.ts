import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template:`
  Hello {{ city }} , 
  <app-user></app-user>
  `,
  styles:
  `
  :host{
    color : blue;
  }
  `
})
export class AppComponent {
  title = 'angula-18-tutorial';
   city = 'San Francisco';
   // The above line is equivalent to the following line  
  // city: string ='San Fransisco';

}
