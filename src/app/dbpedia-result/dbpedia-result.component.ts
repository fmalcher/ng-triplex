import { TripleService } from './../shared/triple.service';
import { Component, OnInit, Input } from '@angular/core';

import { WikiResult } from '../shared/models/wiki-result';

@Component({
  selector: 'tr-dbpedia-result',
  templateUrl: './dbpedia-result.component.html',
  styleUrls: ['./dbpedia-result.component.css']
})
export class DbpediaResultComponent implements OnInit {

  @Input() row: WikiResult;

  constructor(private ts: TripleService) { }

  ngOnInit() {
  }

  lookupDBpedia(title: string) {
    title = this.underscorify(title);
    this.ts.lookupUrl('http://de.dbpedia.org/resource/' + title);
  }

  underscorify(str: string) {
    return str.split(' ').join('_');
  }

}
