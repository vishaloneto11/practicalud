import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SeoservicesService {

  constructor(@Inject(DOCUMENT) private dom: any) {
  }
  // via dom URL
  updateCanonicalUrl() {
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    const myurl = this.dom.URL;
    const finalUrl = this.dom.URL.split('?')[0]
    console.log("v", myurl)
    console.log("p", finalUrl)
    element.setAttribute('href', finalUrl)


  }
  // via core approach 
  updateCanonicalUrlf(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', url)
  }
  // via route
  updateCanonicalUrlr(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', url)
  }
}
