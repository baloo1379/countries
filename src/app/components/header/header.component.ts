import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import octicons from "@primer/octicons";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showBackButton = false;
  icon!: SafeHtml;

  constructor(private router: Router, private sanitizer: DomSanitizer, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showBackButton = event.url !== '/'
      }
    });
    this.icon = this.sanitizer.bypassSecurityTrustHtml(octicons['globe'].toSVG({ "width": 18 }) + '<span>Regions explorer</span>');
  }

  ngOnInit(): void {  }

  back(): void {
    this.location.back();
  }

}
