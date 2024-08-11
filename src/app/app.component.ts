import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from "./child/child.component";
import { CommentsComponent } from "./comments/comments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ChildComponent, CommentsComponent],
  template: `
  <nav>
      <a href="/">Child</a>
      |
      <a href="/user">User</a>
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
