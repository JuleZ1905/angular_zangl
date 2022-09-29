import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interfaces';

@Component({
  selector: 'app-task',
  template: `
    <div class="task" *ngIf="!isAddTask">
      <h2>{{ task.name }}</h2>
      <p>{{ task.description }}</p>
    </div>
    <div class="addTask">
      <button
        mat-fab
        color="warn"
      >
        <mat-icon class="">delete</mat-icon>
      </button>
    </div>
  `,
  styles: ['.task {padding: 30px}'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {
    name: 'default task',
    description: 'default description',
  };
  @Input() isAddTask = false;

  constructor() {}

  ngOnInit(): void {}
}
