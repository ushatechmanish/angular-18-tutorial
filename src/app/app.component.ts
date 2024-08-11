import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
  <section (mouseover)="onMouseOver()">
    There is a secret message for you .Hover to reveal
    <p> {{ secretMessage }}</p>
  </section>
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
  secretMessage: string = "";
  constructor(){

  }
  onMouseOver(){
    this.secretMessage=`secret message`;
  }
}
