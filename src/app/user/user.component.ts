import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `Hello {{ username }}`,
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = 'Manish Chauhan';
}
