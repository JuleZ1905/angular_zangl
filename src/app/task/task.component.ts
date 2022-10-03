import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from '../interfaces';
import { deleteTask, addTask } from '../store/tasks.action';

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
    id: 0,
    name: 'default task',
    description: 'default description',
  };
  @Input() isAddTask = false;

  constructor(private router: Router, private store: Store<{tasks: Task[]}>) {}

  ngOnInit(): void {}

  viewDetails(task: any) {
    this.router.navigate(['/detail-view'], { state: { task: task } });
  }

  addTask() {
    let name = document.getElementById('name') as HTMLInputElement;
    let desc = document.getElementById('desc') as HTMLInputElement;
    this.store.dispatch(addTask({ id: Math.floor(Math.random() * 1000000) + 5, name: name.value, description: desc.value }));
    name.value = '';
    desc.value = '';
  }

  deleteTask() {
    this.store.dispatch(deleteTask(this.task.id));
  }
}
