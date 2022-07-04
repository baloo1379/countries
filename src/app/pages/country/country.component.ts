import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/models/region.model';
import { RegionService } from 'src/app/services/region.service';

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  private countryCCA3!: string;
  regionName!: string;
  country$!: Observable<Region>;

  constructor(private route: ActivatedRoute, private regionService: RegionService, private router: Router) {
    this.regionName = this.route.snapshot.paramMap.get('name') ?? '';
    this.countryCCA3 = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.country$ = this.regionService.getCountry(this.regionName, this.countryCCA3).pipe(map(country => {
      if(country === undefined) {
        this.router.navigate([`/region/${this.regionName}`])
      }
      return country;
    }));
  }

}
