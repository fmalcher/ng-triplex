import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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

  queryResponses: QueryResponse[] = [];
  searchFormValue: string;
  loading = false;

  constructor(
    private ts: TripleService,
    private route: ActivatedRoute,
    private toastr: ToastsManager) {}

  ngOnInit() {
    this.route.queryParams
      .map(e => e.url)
      .filter(e => !!e)
      .do(url => this.searchFormValue = <string>url)
      .do(() => this.loading = true)
      .subscribe(url => {
        this.ts.getTriplesForURI(<string>url)
          .do(() => this.loading = false)
          .subscribe(
            data => this.onResponse(data),
            err => this.errorHandler(err)
          );
      });

    if (!this.route.snapshot.queryParams['url']) {
      this.ts.lookupUrl('http://triplex.work');
    }
  }

  onResponse(data) {
    this.queryResponses = data;
    if (!data.length) {
      this.toastr.info('No triples found.');
    } else {
      const numTriples = data.reduce((acc, qp) => acc + qp.triples.length, 0);
      this.toastr.success(numTriples + ' triples found.');
    }
  }


  lookupUrl(url: string) {
    this.ts.lookupUrl(url);
  }

  errorHandler(err) {
    this.loading = false;

    switch (err.status) {
      case 400: return this.toastr.error('Could not request the given URI.');
      case 422: return this.toastr.error('Could not parse resource.');
      case 500: return this.toastr.error('Could not parse body of resource correctly.');
      default: return this.toastr.error('Something went wrong...');
    }
  }

}
