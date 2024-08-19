import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : String="musaraf";
  age:number=10;

  getCity(){
    return 'Trinco';
  }

  isDisabled:boolean=true;
  searchValue:String="Hi";
  HI:String="Hi it's testing";
  test:String="testing it"

  changeName(){
    this.name="nowsath";
  }

  school:String="Aqsha";

  changeSchool(event:Event){
    
    this.school=(<HTMLInputElement>event.target).value;
  }
}
