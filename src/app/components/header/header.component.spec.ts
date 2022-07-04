import { DomSanitizer } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterEvent, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let sanitizerSpy: jasmine.SpyObj<DomSanitizer>
  let eventSubject: ReplaySubject<RouterEvent>;

  beforeEach(async () => {
    eventSubject = new ReplaySubject<RouterEvent>();
    routerSpy = jasmine.createSpyObj<Router>('Router', ['events'], {events: eventSubject.asObservable()});
    sanitizerSpy = jasmine.createSpyObj<DomSanitizer>('DomSanitizer', ['bypassSecurityTrustHtml'])

    await TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DomSanitizer, useValue: sanitizerSpy }
      ],
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
