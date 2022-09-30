import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interfaces';

@Component({
  selector: 'app-task',
  template: `
    <div class="task" *ngIf="!isAddTask">
      <h2 class="task-name">{{ task.name }}</h2>
      <p class="task-desc">{{ task.description }}</p>
      <mat-checkbox class="task-checkbox"></mat-checkbox>
    </div>
    <div class="task add-task" *ngIf="isAddTask">
      <input type="text">
      <input type="text">
    </div>
  `,
  styleUrls: ['./task.component.css'],
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
