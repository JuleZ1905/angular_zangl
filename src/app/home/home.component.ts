import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/home"><span class="home-link">Home</span></a>
    </mat-toolbar>
    <h1>Your Tasks</h1>
    <div class="tasks">
      <app-task *ngFor="let task of tasks" [task]="task"></app-task>
    </div>
  `,
  styles: ['.home-link { color: white; }', 'a { text-decoration: none; }', '.tasks { display:flex; }'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  tasks = [
    { name: 'task1', description: 'description1' },
    { name: 'task2', description: 'description2' },
    { name: 'task3', description: 'description3' },
    { name: 'task4', description: 'description4' },
    { name: 'task5', description: 'description5' },
  ];
  ngOnInit(): void {}
}
