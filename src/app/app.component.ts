import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template:`
    <!-- @if (isLoggedIn) {
      <p>Welcome back friend </p>
    } -->
      @if (isServerRunning) {
          The server is running 
      }
      @else {
          The server is not running
      }

  `,
  styles:
  `
  :host{
    color : blue;
  }
  `
})
export class AppComponent {
// isLoggedIn = true;
isServerRunning: boolean = true;

}
