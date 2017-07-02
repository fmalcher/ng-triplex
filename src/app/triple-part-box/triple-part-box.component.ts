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
  @Input() queryUrl: string;

  get cssClasses() {
    switch (this.partType) {
      case 'subject':   return 'panel-warning';
      case 'predicate': return 'panel-primary';
      case 'object':    return 'panel-danger';
      default:          return 'panel-default';
    }
  }

  constructor(private ts: TripleService) { }

  ngOnInit() {
    console.log(this.queryUrl);
    console.log(this.triplePart.uri);
  }

  lookupUrl(url: string) {
    this.ts.lookupUrl(url);
  }


}
