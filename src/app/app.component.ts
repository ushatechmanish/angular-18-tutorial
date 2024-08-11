import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
  Hello world
  `,
  styles:
  `
  :host{
    color : blue;
  }
  `
})
export class AppComponent {
  title = 'angula-18-tutorial';
}
