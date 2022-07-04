import { Component, OnInit } from '@angular/core';
// @ts-ignore
import octicons from "@primer/octicons";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  icon!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.icon = this.sanitizer.bypassSecurityTrustHtml(octicons['x'].toSVG({ "width": 16 }));
  }

  ngOnInit(): void {
  }

}
