import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from "./child/child.component";
import { CommentsComponent } from "./comments/comments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, UserComponent, ChildComponent, CommentsComponent],
  template: `
  <nav>
      <a routerLink="/">Child</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet/>
  `,
  styles:
    `
  :host{
    color : blue;
  }
  `
})
export class AppComponent 
{
 
}
