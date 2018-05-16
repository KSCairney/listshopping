import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  itemArray = [];

  addBlue() {
    this.isBlue = "#265aaf";
    this.isOffBlue = "#c7dbfc";
  }

  addItem(value) {
    this.itemArray.push(value);
    console.log(this.myItems);
  }

  /*delete item*/
  deleteItem(index){
    this.itemArray.splice(index,1);
   }

  // submit Form
  mySubmit(value.any){
    if(value!=="") {
      this.itemArray.push(value);
      this.myForm.reset();
      //this.myForm.reset()
    } else {
      alert('Field required')
    }
  }
}
