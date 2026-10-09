import { NgFor, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule,NgFor,NgIf],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  student=["apple","bnana","orange"];
  name = input<string>('');
 
  task="";
  taskList:{id:number,task:string}[]=[];
  addTask()
  {
    this.taskList.push({id:this.taskList.length+1,task:this.task});
    console.log(this.taskList);

  }
  deleteTask(taskId:number)
  {
   this.taskList= this.taskList.filter((task)=>task.id!=taskId)
  }
}
