import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { TripleService } from './../shared/triple.service';
import { WikiResult } from './../shared/models/wiki-result';

@Component({
  selector: 'tr-dbpedia-search',
  templateUrl: './dbpedia-search.component.html',
  styleUrls: ['./dbpedia-search.component.css']
})
export class DBPediaSearchComponent implements OnInit {

  wikiResults$: Observable<WikiResult[]>;
  searchFormValue: string;
  loading = false;

  constructor(private ts: TripleService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.wikiResults$ = this.route.queryParams
      .pluck('q')
      .filter(e => !!e)
      .do(url => this.searchFormValue = url as string)
      .do(() => this.loading = true)
      .switchMap(url => this.ts.getResultsFromWikipedia(url as string))
      .do(() => this.loading = false);
  }

  wikiSearch(searchTerm: string) {
    this.ts.wikiSearch(searchTerm);
  }

}
