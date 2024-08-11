import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
  <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="logo.png" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent 
{
  logoUrl = 'logo.png';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
