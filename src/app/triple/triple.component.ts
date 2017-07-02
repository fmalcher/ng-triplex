import { Component, OnInit, Input } from '@angular/core';

import { Triple } from '../shared/models/triple';

@Component({
  selector: 'tr-triple',
  templateUrl: './triple.component.html',
  styleUrls: ['./triple.component.css']
})
export class TripleComponent {

  @Input() triple: Triple;
  @Input() queryUrl: string;

}
