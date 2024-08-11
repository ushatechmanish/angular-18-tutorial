import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
  <app-user [username]="occupation"></app-user>
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
  occupation:string ="Software Engineer";
  constructor(){

  }
  onMouseOver(){
    this.secretMessage=`secret message`;
  }
}
