import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizfe';


  constructor (private router: Router){

  }

  changeRoute(rout:string){
    this.router.navigate([rout]);
  }
}
