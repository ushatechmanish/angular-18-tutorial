import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ' <button class="btn" (click)="addItem()">Add Item</button>',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  count: number = 1;
  @Output() incrementCountEvent = new EventEmitter<number>();
  addItem(): void 
  {
    this.count+=1;
    this.incrementCountEvent.emit(this.count);
  }
}
