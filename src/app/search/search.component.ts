import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'tr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() formValue: string;
  @Output() searchSubmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  lookupUrl(url: string) {
    this.searchSubmit.emit(url);
  }

}
