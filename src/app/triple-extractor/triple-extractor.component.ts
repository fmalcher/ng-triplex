import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { TripleService } from '../shared/triple.service';
import { QueryResponse } from '../shared/models/query-response';

@Component({
  selector: 'tr-triple-extractor',
  templateUrl: './triple-extractor.component.html',
  styleUrls: ['./triple-extractor.component.css']
})
export class TripleExtractorComponent implements OnInit {

  tripleResponse$: Observable<QueryResponse>;
  searchFormValue: string;

  constructor(private ts: TripleService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.tripleResponse$ = this.route.queryParams
      .pluck('url')
      .filter(e => !!e)
      .do(url => this.searchFormValue = url as string)
      .switchMap(url => this.ts.getTriplesForURI(url as string));
  }

}
