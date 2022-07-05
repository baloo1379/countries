import { Observable, of } from 'rxjs';
import { RegionService } from './../../services/region.service';
import { Region, RegionPath } from './../../models/region.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  providers: [TitleCasePipe]
})
export class RegionComponent implements OnInit {
  regionName!: string;
  region$!: Observable<Region[]>

  constructor(private route: ActivatedRoute, private regionService: RegionService, private titleCasePipe: TitleCasePipe, private titleService: Title) {
  }

  ngOnInit(): void {
    const regionName: RegionPath = this.route.snapshot.paramMap.get('name') ?? '';
    this.regionName = regionName;
    this.titleService.setTitle(this.titleCasePipe.transform(regionName + ' - Region explorer'));

    this.region$ = this.regionService.getRegion(regionName);
  }

}
