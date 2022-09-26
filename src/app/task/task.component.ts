import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interfaces';

@Component({
  selector: 'app-task',
  template: `
    <div class="task">
      <h2>{{ task.name }}</h2>
      <p>{{ task.description }}</p>
    </div>
  `,
  styles: [
    '.task {padding: 30px}'
  ]
})

export class TaskComponent implements OnInit {
  
  @Input() task: Task = {
    name: 'default task',
    description: 'default description'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
