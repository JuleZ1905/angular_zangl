import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
            *ngFor="let task of tasks"
            [task]="task"
            (click)="onSelect(task)"
          ></app-task>
        </div>
        <div class="add-view">
          <app-task class="add-task" [isAddTask]="true"> </app-task>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  tasks = [{ name: 'task 1', description: 'description 1' }];

  ngOnInit(): void {
    for (let index = 2; index < 100; index++) {
      this.tasks.push({
        name: 'taskdefuehfuehfuhefuheufuehfuehfuheufhe' + index,
        description: 'description ' + index,
      });
    }
  }

  onSelect(task: any) {
    this.router.navigate(['/edit-task'], { state: { task: task } });
  }
}
