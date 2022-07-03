import { REGIONS } from './../../models/region.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  availableRegions: string[] = REGIONS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
