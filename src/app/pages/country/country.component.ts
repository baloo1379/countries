import { map, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/models/region.model';
import { RegionService } from 'src/app/services/region.service';
import { TitleCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [TitleCasePipe]
})
export class CountryComponent implements OnInit {
  private countryCCA3!: string;
  regionName!: string;
  country$!: Observable<Region>;

  constructor(private route: ActivatedRoute, private regionService: RegionService, private router: Router, private titleCasePipe: TitleCasePipe, private titleService: Title) {
    this.regionName = this.route.snapshot.paramMap.get('name') ?? '';
    this.countryCCA3 = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.country$ = this.regionService.getCountry(this.regionName, this.countryCCA3).pipe(map(country => {
      if(country === undefined) {
        this.router.navigate([`/region/${this.regionName}`])
      }
      this.titleService.setTitle(this.titleCasePipe.transform(country.name.common + ' - Region explorer'));
      return country;
    }));
  }

}
