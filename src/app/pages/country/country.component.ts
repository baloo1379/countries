import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private regionService: RegionService) { }

  ngOnInit(): void {
  }

}
