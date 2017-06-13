import { Component, OnInit, Input } from '@angular/core';

import { Triple } from '../shared/models/triple';

@Component({
  selector: 'tr-triple',
  templateUrl: './triple.component.html',
  styleUrls: ['./triple.component.css']
})
export class TripleComponent implements OnInit {

  @Input() triple: Triple;

  constructor() { }

  ngOnInit() {
  }

}
