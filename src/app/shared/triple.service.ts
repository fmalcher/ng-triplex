import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { QueryResponse } from './models/query-response';

@Injectable()
export class TripleService {

  constructor(private http: Http, private router: Router) { }

  getTriplesForURI(uri: string): Observable<QueryResponse> {
    return this.http.get('/assets/dummyResponse.json')
      .map(res => res.json());
  }


  lookupUrl(url: string) {
    this.router.navigate(['/'], { queryParams: { url: url } });
  }

}
