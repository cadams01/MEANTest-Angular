import { Response } from '@angular/http';
import { SodaService } from './services/soda.services';
import Soda from './models/soda.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //export class AppComponent {
    //title = 'sodaapp-angular';
  //}


  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private sodaService: SodaService
  ) { }

  //Declaring the new todo Object and initilizing it
  public newSoda: Soda = new Soda()

  //An Empty list for the visible todo list
  sodasList: Soda[];
  editSodas: Soda[] = [];

  ngOnInit(): void {

    //At component initialization the 
    this.sodaService.getSodas()
      .subscribe(sodas => {
        //assign the todolist property to the proper http response
        this.sodasList = sodas
        console.log(sodas)
      })
  }

//This method will get called on Create button event
  
create() {
  this.sodaService.createSoda(this.newSoda)
    .subscribe((res) => {
      this.sodasList.push(res.data)
      this.newSoda = new Soda()
    })
}

editSoda(soda: Soda) {
  console.log(soda)
   if(this.sodasList.includes(soda)){
    if(!this.editSodas.includes(soda)){
      this.editSodas.push(soda)
    }else{
      this.editSodas.splice(this.editSodas.indexOf(soda), 1)
      this.sodaService.editSoda(soda).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        // why would we want this line???
        //this.editTodo(todo)
        console.error('Update Unsuccesful')
      })
    }
  }
}

doneSoda(soda:Soda){
  soda.status = 'Done'
  this.sodaService.editSoda(soda).subscribe(res => {
    console.log('Update Succesful')
  }, err => {
    // why why why
    //this.editTodo(todo)
    console.error('Update Unsuccesful')
  })
}

submitSoda(event, soda:Soda){
  if(event.keyCode ==13){
    this.editSoda(soda)
  }
}

deleteSoda(soda: Soda) {
  this.sodaService.deleteSoda(soda._id).subscribe(res => {
    this.sodasList.splice(this.sodasList.indexOf(soda), 1);
  })
}


}