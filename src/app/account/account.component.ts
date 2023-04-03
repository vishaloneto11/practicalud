
import { Component, OnChanges, OnInit } from '@angular/core';
import { MetaServicesService } from '../Services/meta-services.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

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
