import { Service, signal } from '@angular/core';
import { withIncrementalHydration } from '@angular/platform-browser';

@Service()
export class HomeService {
    count=signal(0);
   
    decrement()
    {
        this.count.update((c)=>c-1);
    }
     increment()
    {
        this.count.update((c)=>c+1);
    }
    reset()
    {
        this.count.set(0);
    }
}
