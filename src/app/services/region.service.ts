import { Region, RegionPath } from './../models/region.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, map, Observable, of, Subject, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private regionsData: {[name: string]: Region[]} = {}

  constructor(private http: HttpClient) { }

  private fetchRegion(regionName: RegionPath): Observable<Region[]> {
    const url = `https://restcountries.com/v3.1/region/${regionName}`;

    return this.http.get<Region[]>(url).pipe(
      tap(region => {
        this.regionsData[regionName] = region
      })
    );
  }

  getRegion(regionName: RegionPath): Observable<Region[]> {
    if(this.regionsData[regionName] !== undefined) {
      return of(this.regionsData[regionName])
    }
    return this.fetchRegion(regionName);
  }

  getCountry(regionName: RegionPath, countryCCA3: string): Observable<Region> {
    if(this.regionsData[regionName] !== undefined) {
      return of(this.regionsData[regionName].filter(country => country.cca3 === countryCCA3)[0])
    }
    return this.fetchRegion(regionName).pipe(
      map(region => {
        return region.filter(country => country.cca3 === countryCCA3)[0]
      })
    )
  }
}
