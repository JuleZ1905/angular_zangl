import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  template: `
    <p>
      {{ route_info}}
    </p>
  `,
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  route_info: any;

  constructor(private router: Router) { 
    this.route_info = this.router.getCurrentNavigation()?.extras.state?.['task'].name;
    console.log(this.route_info);
  }

  ngOnInit(): void {
  }

}
