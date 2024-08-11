import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ChildComponent],
  template: `
  <app-child  (incrementCountEvent)="addItemEvent($event)"></app-child>
  The counter is {{ count }}
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
  count: number= 1;
  constructor(){

  }
  addItemEvent(counter: number){
    this.count=counter;
  }
}
