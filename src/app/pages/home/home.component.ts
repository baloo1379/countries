import { REGIONS } from './../../models/region.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  availableRegions: string[] = REGIONS;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Region explorer')
  }

}
