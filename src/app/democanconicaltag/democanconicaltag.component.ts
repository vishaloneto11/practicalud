import { Component, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';
import { SeoservicesService } from '../Services/seoservices.service';


@Component({
  selector: 'app-democanconicaltag',
  templateUrl: './democanconicaltag.component.html',
  styleUrls: ['./democanconicaltag.component.css']
})
export class DemocanconicaltagComponent implements OnInit {


  hostName = "https://www.nebula.com"

  constructor(private seoservices: SeoservicesService) {

  }

  ngOnInit(): void {

    this.seoservices.updateCanonicalUrl();
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
