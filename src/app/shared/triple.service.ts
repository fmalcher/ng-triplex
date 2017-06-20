import { WikiResult } from './models/wiki-result';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { QueryResponse } from './models/query-response';

@Injectable()
export class TripleService {

  constructor(
    private http: Http,
    private jsonp: Jsonp,
    private router: Router,
    @Inject('API_URL') private apiUrl) { }

  getTriplesForURI(uri: string): Observable<QueryResponse[]> {
    return this.http.post(this.apiUrl + '/query', uri)
      .map(res => res.json());
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
      }));
  }


  lookupUrl(url: string) {
    this.router.navigate(['/'], { queryParams: { url: url } });
  }

  wikiSearch(searchTerm: string) {
    this.router.navigate(['/', 'dbpedia'], { queryParams: { q: searchTerm } });
  }

}
