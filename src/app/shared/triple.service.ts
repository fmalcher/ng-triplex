import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { QueryResponse } from './models/query-response';
import { WikiResult } from './models/wiki-result';

@Injectable()
export class TripleService {

  constructor(
    private http: Http,
    private jsonp: Jsonp,
    private router: Router,
    @Inject('API_URL') private apiUrl) { }

  getTriplesForURI(uri: string): Observable<QueryResponse[]> {
    return this.http.post(this.apiUrl + '/query', uri)
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  getResultsFromWikipedia(searchTerm: string): Observable<WikiResult[]> {
    return this.jsonp.get(`https://de.wikipedia.org/w/api.php?srsearch=${searchTerm}&action=query&list=search&format=json&callback=JSONP_CALLBACK`)
      .map(res => res.json())
      .map(data => data.query.search)
      .map(results => results.map(r => {
        return {
          title: r.title,
          snippet: r.snippet
        };
      }))
      .catch(this.errorHandler);
  }


  lookupUrl(url: string) {
    this.router.navigate(['/query'], { queryParams: { url: url } });
  }

  wikiSearch(searchTerm: string) {
    this.router.navigate(['/dbpedia'], { queryParams: { q: searchTerm } });
  }


  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

}
