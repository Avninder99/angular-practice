import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { authObjectSelector } from 'src/app/store/auth.selector';

@Component({
  selector: 'app-hidden-admin-page',
  templateUrl: './hidden-admin-page.component.html',
  styleUrls: ['./hidden-admin-page.component.css']
})
export class HiddenAdminPageComponent {
  token$: Observable<{ token: string | null, isAdmin: boolean, username: string | null }>

  constructor(private taskService: TaskService, private store: Store) { }

  adminIncompleteTasks = this.taskService.adminIncompleteTasks;
  adminCompleteTasks = this.taskService.adminCompleteTasks;
  incompleteTasks = this.taskService.incompleteTasks;
  completeTasks = this.taskService.completeTasks;

  content: string = '';
  type: string = '';

  addTask = (key: string) => {
    this.taskService.createTask(this.content, this.type, key);
  }

  toggleComplete = (index: number, currStatus: string, isAdmin: boolean) => {
    this.taskService.toggleCompletion(index, currStatus, isAdmin)
  }

  deleteTask = (index: number, inWhichArray: string) => {
    this.taskService.deleteTask(index, inWhichArray);
  }

}
