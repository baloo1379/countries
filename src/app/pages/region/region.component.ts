import { Observable } from 'rxjs';
import { RegionService } from './../../services/region.service';
import { Region, RegionPath } from './../../models/region.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  regionName!: string;
  region$!: Observable<Region[]>

  constructor(private route: ActivatedRoute, private regionService: RegionService) { }

  ngOnInit(): void {
    const regionName: RegionPath = this.route.snapshot.paramMap.get('name') ?? '';
    console.log({regionName});
    this.regionName = regionName;

    this.region$ = this.regionService.getRegion(regionName);
  }

}
