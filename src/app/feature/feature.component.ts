import { Component, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';
import { SeoservicesService } from '../Services/seoservices.service';
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  hostName = "https://www.nebula.com"

  constructor(private seoservices: SeoservicesService) {

  }

  ngOnInit(): void {

    this.seoservices.updateCanonicalUrl();
    // this.seoservices.updateCanonicalUrl(this.hostName + '/feature');
  }
  // setPageTitle(title: string) {
  //   this.metaservice.setPageTitle(title);
  // }
  // getPageTitle() {
  // }
  // createLinkForCanonicalURL() {
  //   this.metaservice.createLinkForCanonicalURL();
  // }
}
