import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPracticle';
  num:number=21;
  str:String="Hello";
  val:boolean=true;
  msg="hello dear";
  txt:any=121.04;
}
