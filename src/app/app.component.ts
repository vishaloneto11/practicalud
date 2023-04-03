import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicalud';
  myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  evenarray = [2, 4, 6, 8]
  oddarray = [1, 3, 5, 7, 9]
  onlyodd = false;

}
