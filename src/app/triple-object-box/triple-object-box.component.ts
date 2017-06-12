import { TripleService } from './../shared/triple.service';
import { Component, Input } from '@angular/core';

import { TripleObject } from '../shared/models/triple-object';

@Component({
  selector: 'tr-triple-object-box',
  templateUrl: './triple-object-box.component.html',
  styleUrls: ['./triple-object-box.component.css']
})
export class TripleObjectBoxComponent {

  @Input() object: TripleObject;

  constructor(private ts: TripleService) { }

  lookupUrl(url: string) {
    this.ts.lookupUrl(url);
  }


}
