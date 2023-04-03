import { Component, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
