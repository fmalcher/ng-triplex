import { TripleService } from './../shared/triple.service';
import { Component, Input } from '@angular/core';

import { TriplePart } from '../shared/models/triple-part';

@Component({
  selector: 'tr-triple-part-box',
  templateUrl: './triple-part-box.component.html',
  styleUrls: ['./triple-part-box.component.css']
})
export class TriplePartBoxComponent {

  @Input() triplePart: TriplePart;
  @Input() partType: string;

  get cssClasses() {
    switch (this.partType) {
      case 'subject':   return 'panel-warning';
      case 'predicate': return 'panel-primary';
      case 'object':    return 'panel-danger';
      default:          return 'panel-default';
    }
  }

  constructor(private ts: TripleService) { }

  lookupUrl(url: string) {
    this.ts.lookupUrl(url);
  }


}
