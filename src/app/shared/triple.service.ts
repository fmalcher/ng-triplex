import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { QueryResponse } from './models/query-response';

@Injectable()
export class TripleService {

  constructor(private http: Http) { }

  getTriplesForURI(uri: string): Observable<QueryResponse> {
    return this.http.get('/assets/dummyResponse.json')
      .map(res => res.json());
  }

}
