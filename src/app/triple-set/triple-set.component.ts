import { Component, OnInit, Input } from '@angular/core';

import { TripleSet } from '../shared/models/triple-set';

@Component({
  selector: 'tr-triple-set',
  templateUrl: './triple-set.component.html',
  styleUrls: ['./triple-set.component.css']
})
export class TripleSetComponent implements OnInit {

  @Input() tripleSet: TripleSet;

  constructor() { }

  ngOnInit() {
  }

}
