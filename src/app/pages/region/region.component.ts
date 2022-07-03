import { RegionPath } from './../../models/region.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  region!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const region: RegionPath = this.route.snapshot.paramMap.get('name') ?? '';
    console.log({region});
    this.region = region;

  }

}
