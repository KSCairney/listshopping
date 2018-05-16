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

  addBlue() {
    this.isBlue = "#265aaf";
    this.isOffBlue = "#c7dbfc";
  }

  addItem(value) {
    if (value !== "" || value !== NULL) {
      this.itemArray.push(value);
      console.log(this.myItems);
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
