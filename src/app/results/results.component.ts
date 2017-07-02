import { QueryResponse } from './../shared/models/query-response';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() response: QueryResponse;
  @Input() queryUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
