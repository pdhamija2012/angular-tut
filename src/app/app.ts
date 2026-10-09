import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { User } from './user/user';


@Component({
  imports: [RouterOutlet,TaskList,User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   taskName = signal('Learn Angular');
  count=signal(1);
  a=signal(10);
  b=signal(10);

    constructor() 
    {
     
      effect(()=>
      {
          console.log(this.count());
      });
    } 
   
  protected readonly title = signal('Ecomerce Website');
  
  c=computed(()=> this.a()+this.b());


  public sum()
  {
    this.a.set(29);
    
   
    
  }
  public updateData()
  {
    
    this.count.set(this.count()+1);
    if(this.count()==10)
    {
      this.count.set(1);
    }
    
  }

// public   abc(action:string) {

 

        // if(this.count >=0 && action=='plus')
        // {
        //    this.count++;
        // }
        //  if( this.count >0 && action=='minus')
        //  {
        //   this.count--;
        // }
       
      
     

  //}
    
  }


