import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

import { NavigationService } from './navigation.service';
import { ReplaySubject } from 'rxjs';

describe('NavigationService', () => {
  let service: NavigationService;
  let routerSpy: jasmine.SpyObj<Router>;
  let locationSpy: jasmine.SpyObj<Location>;
  let eventSubject: ReplaySubject<RouterEvent>;

  beforeEach(() => {
    eventSubject = new ReplaySubject<RouterEvent>();
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigateByUrl', 'events'], {events: eventSubject.asObservable()});
    locationSpy = jasmine.createSpyObj<Location>('Location', ['back']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: Location, useValue: locationSpy }
      ]
    });
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });

  describe('#back', () => {
    it('should navigate to "/" without history', () => {
      // cast to any to hack access to private property
      expect((service as any).history.length).toEqual(0);
      service.back();
      expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/');
    })

    it('should go back once with history', () => {
      eventSubject.next(new NavigationEnd(0, 'http://localhost:4200/a', 'http://localhost:4200/a'))
      eventSubject.next(new NavigationEnd(1, 'http://localhost:4200/b', 'http://localhost:4200/b'))
      eventSubject.next(new NavigationEnd(2, 'http://localhost:4200/c', 'http://localhost:4200/c'))
      expect((service as any).history.length).toEqual(3);
      service.back();
      expect((service as any).history.length).toEqual(2);
      expect(locationSpy.back).toHaveBeenCalledOnceWith();
    })
  })
});
