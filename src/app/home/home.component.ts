import { Component, OnChanges, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private metaservice: MetaServicesService) {

  }

  ngOnInit(): void {
    this.createLinkForCanonicalURL();
  }
  setPageTitle(title: string) {
    this.metaservice.setPageTitle(title);
  }
  getPageTitle() {
  }
  createLinkForCanonicalURL() {
    this.metaservice.createLinkForCanonicalURL();
  }
}
