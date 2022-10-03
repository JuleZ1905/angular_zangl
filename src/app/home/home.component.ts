import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../interfaces';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <div class="heading-view">
        <mat-toolbar color="primary">
          <a routerLink="/home"><span class="home-link">Home</span></a>
        </mat-toolbar>
        <h1 class="header">Your Tasks</h1>
      </div>
      <div class="task-view">
        <div class="task-list">
          <app-task
            class="task-item"
            *ngFor="let task of tasks$ | async"
            [task]="task"
          ></app-task>
        </div>
        <div class="add-view">
          <app-task class="add-task" [isAddTask]="true"></app-task>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks$: Observable<Task[]>;
  constructor(private store: Store<{tasks: Task[]}>) {
    this.tasks$ = store.select('tasks');
  }

  ngOnInit(): void {
  }
}
