import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegionService } from './region.service';
import { Region } from '../models/region.model';

describe('RegionService', () => {
  let injector: TestBed;
  let service: RegionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegionService]
    });
    injector = getTestBed();
    service = injector.inject(RegionService);
    httpMock = injector.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getRegion', () => {
    it('should return an Observable<Region[]>', () => {
      const regionName = 'macedonia'
      const dummyRegions: Region[] = [
        {...macedonia}
      ];

      service.getRegion(regionName).subscribe(regions => {
        expect(regions.length).toBe(1);
        expect(regions).toEqual(dummyRegions);
      });

      const req = httpMock.expectOne(`https://restcountries.com/v3.1/region/${regionName}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyRegions);
    });
  });

  describe('#getCountry', () => {
    it('should return an Observable<Region>', () => {
      const regionName = 'macedonia';
      const countryCCA3 = 'MKD';
      const dummyRegions: Region[] = [
        macedonia
      ];
      service.getCountry(regionName, countryCCA3).subscribe(country => {
        expect(country).toEqual(macedonia);
      });

      const req = httpMock.expectOne(`https://restcountries.com/v3.1/region/${regionName}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyRegions);
    });
  })
});

const macedonia: Region = {
  "name": {
    "common": "North Macedonia",
    "official": "Republic of North Macedonia",
    "nativeName": {
      "mkd": {
        "official": "Република Северна Македонија",
        "common": "Македонија"
      }
    }
  },
  "tld": [
    ".mk"
  ],
  "cca2": "MK",
  "ccn3": "807",
  "cca3": "MKD",
  "cioc": "MKD",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
    "MKD": {
      "name": "denar",
      "symbol": "den"
    }
  },
  "idd": {
    "root": "+3",
    "suffixes": [
      "89"
    ]
  },
  "capital": [
    "Skopje"
  ],
  "altSpellings": [
    "MK",
    "The former Yugoslav Republic of Macedonia",
    "Republic of North Macedonia",
    "Macedonia, The Former Yugoslav Republic of",
    "Република Северна Македонија"
  ],
  "region": "Europe",
  "subregion": "Southeast Europe",
  "languages": {
    "mkd": "Macedonian"
  },
  "translations": {
    "ara": {
      "official": "جمهورية شمال مقدونيا",
      "common": "شمال مقدونيا"
    },
    "ces": {
      "official": "Republika Severní Makedonie",
      "common": "Severní Makedonie"
    },
    "cym": {
      "official": "Republic of North Macedonia",
      "common": "North Macedonia"
    },
    "deu": {
      "official": "Republik Nordmazedonien",
      "common": "Nordmazedonien"
    },
    "est": {
      "official": "Põhja-Makedoonia Vabariik",
      "common": "Põhja-Makedoonia"
    },
    "fin": {
      "official": "Pohjois-Makedonian tasavalta",
      "common": "Pohjois-Makedonia"
    },
    "fra": {
      "official": "République de Macédoine du Nord",
      "common": "Macédoine du Nord"
    },
    "hrv": {
      "official": "Republika Sjeverna Makedonija",
      "common": "Sjeverna Makedonija"
    },
    "hun": {
      "official": "Észak-macedón Köztársaság",
      "common": "Észak-Macedónia"
    },
    "ita": {
      "official": "Repubblica di Macedonia del Nord",
      "common": "Macedonia del Nord"
    },
    "jpn": {
      "official": "北マケドニア共和国",
      "common": "北マケドニア "
    },
    "kor": {
      "official": "북마케도니아 공화국",
      "common": "북마케도니아"
    },
    "nld": {
      "official": "Republiek Noord-Macedonië",
      "common": "Noord-Macedonië"
    },
    "per": {
      "official": "جمهوری مقدونیه شمالی",
      "common": "مقدونیه شمالی"
    },
    "pol": {
      "official": "Republika Macedonii Północnej",
      "common": "Macedonia Północna"
    },
    "por": {
      "official": "República da Macedônia do Norte",
      "common": "Macedónia do Norte"
    },
    "rus": {
      "official": "Республика Северная Македония",
      "common": "Северная Македония"
    },
    "slk": {
      "official": "Severomacedónska republika",
      "common": "Severné Macedónsko"
    },
    "spa": {
      "official": "República de Macedonia del Norte",
      "common": "Macedonia del Norte"
    },
    "swe": {
      "official": "Republiken Nordmakedonien",
      "common": "Nordmakedonien"
    },
    "urd": {
      "official": "جمہوریہ مقدونیہ",
      "common": "شمالی مقدونیہ"
    },
    "zho": {
      "official": "北馬其頓共和國",
      "common": "北馬其頓"
    }
  },
  "latlng": [
    41.83333333,
    22.0
  ],
  "landlocked": true,
  "borders": [
    "ALB",
    "BGR",
    "GRC",
    "UNK",
    "SRB"
  ],
  "area": 25713.0,
  "demonyms": {
    "eng": {
      "f": "Macedonian",
      "m": "Macedonian"
    },
    "fra": {
      "f": "Macédonienne",
      "m": "Macédonien"
    }
  },
  "flag": "\uD83C\uDDF2\uD83C\uDDF0",
  "maps": {
    "googleMaps": "https://goo.gl/maps/55Q8MEnF6ACdu3q79",
    "openStreetMaps": "https://www.openstreetmap.org/relation/53293"
  },
  "population": 2077132,
  "gini": {
    "2018": 33.0
  },
  "fifa": "MKD",
  "car": {
    "signs": [
      "MK"
    ],
    "side": "right"
  },
  "timezones": [
    "UTC+01:00"
  ],
  "continents": [
    "Europe"
  ],
  "flags": {
    "png": "https://flagcdn.com/w320/mk.png",
    "svg": "https://flagcdn.com/mk.svg"
  },
  "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/mk.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/mk.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
    "latlng": [
      42.0,
      21.43
    ]
  },
  "postalCode": {
    "format": "####",
    "regex": "^(\\d{4})$"
  }
}
