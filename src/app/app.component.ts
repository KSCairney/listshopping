import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';
  itemArray = [];

  addItem(value) {
    if (value !== "" || value !== null) {
      this.itemArray.push(value);
    } else {
      alert('Field required');
    }
  }

  /*delete item*/
  deleteItem(index){
    this.itemArray.splice(index,1);
   }

  activation(myItem){
    myItem.active = !myItem.active;
  }
}
