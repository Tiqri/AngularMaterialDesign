import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconRregistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRregistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

  ngOnInit() {
  }

}
