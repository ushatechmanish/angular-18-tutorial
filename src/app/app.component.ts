import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
  <button (click)="onClick()">Click for secret message  </button>
  <p>{{ secretMessage }}</p>
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
  onClick(){
    this.secretMessage='secret message on click';
  }
}
