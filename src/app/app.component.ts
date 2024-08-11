import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
  <div [contentEditable]="isEditable"></div>
  `,
  styles:
    `
  :host{
    color : blue;
  }
  `
})
export class AppComponent {
  isEditable: boolean = true;
}
