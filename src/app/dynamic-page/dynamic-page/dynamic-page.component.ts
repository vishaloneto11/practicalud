
import { Component, OnChanges, OnInit } from '@angular/core';
import { SeoservicesService } from 'src/app/Services/seoservices.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})


export class DynamicPageComponent implements OnInit {
  hostName = "https://www.nebula.com/profilepage"
  constructor(private seoService: SeoservicesService) { }

  ngOnInit() {
    this.seoService.updateCanonicalUrl();
  }


}

