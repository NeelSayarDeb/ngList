import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  list = ['Angular','Node'];

  onAddingList(e: string){
    this.list.push(e);
  }
}
