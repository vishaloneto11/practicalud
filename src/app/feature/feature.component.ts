import { Component, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
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
