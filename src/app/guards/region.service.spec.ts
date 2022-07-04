import { REGIONS } from './../models/region.model';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap, Router, RouterStateSnapshot } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegionGuard } from './region.service';

describe('RegionGuard', () => {
  const routeMock = (regionName: string) => {
    return { paramMap: convertToParamMap({ 'name': regionName }) } as unknown as ActivatedRouteSnapshot;
  };
  const routeStateMock = (regionName: string) => {
    return { root: routeMock(regionName), snapshot: {}, url: `/region/${regionName}` } as RouterStateSnapshot
  }
  let routerSpy: jasmine.SpyObj<Router>;
  let guard: RegionGuard;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate'])
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRouteSnapshot, useValue: routeMock }
      ],
      imports: [HttpClientTestingModule]
    });
    guard = TestBed.inject(RegionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('#canActivate', () => {
    it('should grant access for all regions from Region model', () => {
      REGIONS.forEach(region => {
        expect(guard.canActivate(routeMock(region), routeStateMock(region))).toBeTrue();
      })
    })

    it('should redirect on typo in region name', () => {
      guard.canActivate(routeMock('europee'), routeStateMock('europee'));

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/'])
    })
  })
});
