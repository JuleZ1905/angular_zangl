import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../interfaces';

@Component({
  selector: 'app-task',
  template: `
    <div class="task" *ngIf="!isAddTask">
      <h2 class="task-name" (click)="viewDetails(task)">{{ task.name }}</h2>
      <p class="task-desc" (click)="viewDetails(task)">{{ task.description }}</p>
      <mat-checkbox class="task-checkbox" (change)="deleteTask()"></mat-checkbox>
    </div>
    <div class="task add-task" *ngIf="isAddTask">
      <input id="name" type="text" placeholder="name">
      <input id="desc" type="text" placeholder="description">
      <button (click)="addTask()">Add Task</button>
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewDetails(task: any) {
    this.router.navigate(['/detail-view'], { state: { task: task } });
  }

  addTask() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const desc = (document.getElementById('desc') as HTMLInputElement).value;

    console.log(name, desc);
  }

  deleteTask() {
    console.log('delete task');
  }
}
