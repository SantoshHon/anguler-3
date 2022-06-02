import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h-ssignment-angular';
  showSecreat :boolean=false;
  
  counter: number[] = [];
  num :number=1;
  numbersArray: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  onCreateServer(){
    this.showSecreat=!this.showSecreat;
    this.counter.push(this.num++);
  }
  getColor(count:number)
  {
    return count>5 ? 'blue' : 'transparent';
  }
  
}


 
  
  
