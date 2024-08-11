import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `Hello {{ username }} `,
  styleUrl: './user.component.css'
})
export class UserComponent 
{
  @Input() username: string = '';
}
