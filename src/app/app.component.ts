import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showOrhide:boolean = true;

  toggle(){
    this.showOrhide = !this.showOrhide
  }
}
