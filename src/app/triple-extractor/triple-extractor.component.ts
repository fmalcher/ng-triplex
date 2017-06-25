import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { NotificationsService } from 'angular2-notifications';

import { TripleService } from '../shared/triple.service';
import { QueryResponse } from '../shared/models/query-response';

@Component({
  selector: 'tr-triple-extractor',
  templateUrl: './triple-extractor.component.html',
  styleUrls: ['./triple-extractor.component.css']
})
export class TripleExtractorComponent implements AfterViewInit {

  queryResponses$: Observable<QueryResponse[]>;
  searchFormValue: string;
  loading = false;

  constructor(
    private ts: TripleService,
    private route: ActivatedRoute,
    private ns: NotificationsService) {}

  ngAfterViewInit() {
    this.queryResponses$ = this.route.queryParams
      .pluck('url')
      .filter(e => !!e)
      .do(url => this.searchFormValue = url as string)
      .do(() => this.loading = true)
      .switchMap(url => this.ts.getTriplesForURI(url as string))
      .do(() => this.loading = false);

    if (!this.route.snapshot.queryParams['url']) {
      this.ts.lookupUrl('http://triplex.work');
    }
  }

  lookupUrl(url: string) {
    this.ts.lookupUrl(url);
  }

}
