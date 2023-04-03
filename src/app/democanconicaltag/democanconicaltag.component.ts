import { Component, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';

@Component({
  selector: 'app-democanconicaltag',
  templateUrl: './democanconicaltag.component.html',
  styleUrls: ['./democanconicaltag.component.css']
})
export class DemocanconicaltagComponent implements OnInit {



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
