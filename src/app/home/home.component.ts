import { Component, OnInit } from '@angular/core';

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
        <div class="tasks">
          <app-task
            class="task-item"
            *ngFor="let task of tasks"
            [task]="task"
          ></app-task>
          <app-task [isAddTask]="true"></app-task>
        </div>
        <div class="v-line"></div>
        <app-edit-task> </app-edit-task>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  tasks = [{ name: 'task 1', description: 'description 1' }];
  ngOnInit(): void {
    for (let index = 2; index < 50; index++) {
      this.tasks.push({
        name: 'taskdefuehfuehfuhefuheufuehfuehfuheufhe' + index,
        description: 'description ' + index,
      });
    }
  }
}
