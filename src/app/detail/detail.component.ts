import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  template: `
    <div class="home">
      <div class="heading-view">
        <mat-toolbar color="primary">
          <a routerLink="/home"><span class="home-link">Home</span></a>
        </mat-toolbar>
        <h1 class="header">Task details</h1>
      </div>
      <div class="detail-view">
        <div class="detail-list">
          <h1>Name:  {{task.name}} </h1>
          <h2>Description: {{task.description}} </h2>
      </div>
    </div>
  `,
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  
  task: any;

  constructor(private router: Router) {
    this.task = this.router.getCurrentNavigation()?.extras.state?.['task'];
  }

  ngOnInit(): void {}
}
