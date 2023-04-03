import { Component, OnInit } from '@angular/core';
import { SeoservicesService } from '../Services/seoservices.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private seoservices: SeoservicesService) {

  }


  ngOnInit(): void {

    this.seoservices.updateCanonicalUrl();
  }


}
