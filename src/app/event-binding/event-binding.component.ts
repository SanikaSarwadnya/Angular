import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  result:any;
  resultsub:any;
  resultmul:any;
  resultdiv:any;
  add(a:any,b:any){
    this.result=parseInt(a)+parseInt(b);
  }
  sub(x:any,y:any){
    this.resultsub=parseInt(x)-parseInt(y);
  }

  multiplication(p:any,q:any){
    this.resultmul=parseInt(p)*parseInt(q);
  }

  division(c:any,d:any){
    this.resultdiv=parseInt(c)/parseInt(d);
  }


}
