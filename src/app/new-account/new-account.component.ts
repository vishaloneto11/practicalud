import { Component } from '@angular/core';
import { LoggingService } from '../Services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private lg: LoggingService) {


  }
}
