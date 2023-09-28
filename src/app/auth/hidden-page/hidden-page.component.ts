import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-hidden-page',
  templateUrl: './hidden-page.component.html',
  styleUrls: ['./hidden-page.component.css']
})
export class HiddenPageComponent {
  constructor(private taskService: TaskService) { }

  incompleteTasks = this.taskService.incompleteTasks;
  completeTasks = this.taskService.completeTasks;

  content: string = '';
  type: string = '';

  addTask = () => {
    this.taskService.createTask(this.content, this.type, '');
  }

  toggleComplete = (index: number, currStatus: string) => {
    this.taskService.toggleCompletion(index, currStatus, false)
  }

  deleteTask = (index: number, inWhichArray: string) => {
    this.taskService.deleteTask(index, inWhichArray);
  }

}
