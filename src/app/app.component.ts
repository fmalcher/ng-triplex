import { Component, OnInit } from '@angular/core';

import { TripleService } from './shared/triple.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tripleResponse$;

  constructor(private ts: TripleService) {}

  ngOnInit() {
    this.tripleResponse$ = this.ts.getTriplesForURI('');
  }

}
