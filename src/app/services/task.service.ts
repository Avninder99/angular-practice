import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  incompleteTasks: { content: string, type: string }[] = [ { content: "hello", type: "important" } ];
  completeTasks: { content: string, type: string }[] = [ { content: "hello", type: "important" } ];
  adminCompleteTasks: { content: string, type: string }[] = [ { content: "hello", type: "important" } ];
  adminIncompleteTasks: { content: string, type: string }[] = [ { content: "hello", type: "important" } ];

  constructor() { }

  createTask = (content, type, key) => {
    const task = {
      content,
      type
    }
    if(key === 'admin'){
      this.adminIncompleteTasks.push(task);
    }else{
      this.incompleteTasks.push(task);
    }
  }

  toggleCompletion = (index: number, currStatus: string, isAdmin: boolean) => {
    let holder;
    if(currStatus === 'C'){
      if(isAdmin){
        holder = this.adminCompleteTasks.splice(index, 1);
        this.adminIncompleteTasks.push(holder[0]);
      }else{
        holder = this.completeTasks.splice(index, 1);
        this.incompleteTasks.push(holder[0]);
      }
    }else {
      if(isAdmin){
        holder = this.adminIncompleteTasks.splice(index, 1);
        this.adminCompleteTasks.push(holder[0]);
      }else{
        holder = this.incompleteTasks.splice(index, 1);
        this.completeTasks.push(holder[0]);
      }
    }
  }

  deleteTask = (index: number, inWhichArray: string) => {
    switch (inWhichArray) {
      case 'AI':
        this.adminIncompleteTasks.splice(index, 1);
        break;
      case 'AC':
        this.adminCompleteTasks.splice(index, 1);
        break;
      case 'I':
        this.incompleteTasks.splice(index, 1);
        break;
      case 'C':
        this.completeTasks.splice(index, 1);
        break;
    }
  }
}
