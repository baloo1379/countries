import { Region, Regions } from './../models/region.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, map, Observable, Subject, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  fetchRegions(regionName: Regions) {
    const url = `https://restcountries.com/v3.1/region/${regionName}`;

    return this.http.get<Region>(url).pipe(
      tap(resp => {
        console.log(resp);
      })
    );
  }
}
