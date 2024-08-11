import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
    @for (item of operatingSystems; track item.id) {
      {{item.name}}
    }
  `,
  styles:
    `
  :host{
    color : blue;
  }
  `
})
export class AppComponent {

  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];

}
