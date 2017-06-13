import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { QueryResponse } from './models/query-response';

@Injectable()
export class TripleService {

  constructor(private http: Http, private router: Router, @Inject('API_URL') private apiUrl) { }

  getTriplesForURI(uri: string): Observable<QueryResponse> {
    return this.http.post(this.apiUrl + '/query', uri)
      .map(res => res.json());
  }


  lookupUrl(url: string) {
    this.router.navigate(['/'], { queryParams: { url: url } });
  }

}
