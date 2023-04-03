
import { Component, OnChanges, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';
import { SeoservicesService } from '../Services/seoservices.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  hostName = "https://www.nebula.com"

  constructor(private seoservices: SeoservicesService) {

  }

  ngOnInit(): void {

    this.seoservices.updateCanonicalUrl();
    //this.seoservices.updateCanonicalUrl(this.hostName + '/account');
  }


  // constructor(private metaservice: MetaServicesService) {

  // }

  // ngOnInit(): void {
  //   this.createLinkForCanonicalURL();
  // }
  // setPageTitle(title: string) {
  //   this.metaservice.setPageTitle(title);
  // }
  // getPageTitle() {
  // }
  // createLinkForCanonicalURL() {
  //   this.metaservice.createLinkForCanonicalURL();
  // }
}
