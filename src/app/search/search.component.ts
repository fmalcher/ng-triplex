import { Component, EventEmitter, Output, Input } from '@angular/core';

import { TripleService } from '../shared/triple.service';

@Component({
  selector: 'tr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() formValue: string;

  constructor(private ts: TripleService) { }

  clearForm() {
    this.formValue = '';
  }

  lookupUrl() {
    this.ts.lookupUrl(this.formValue);
  }

}
