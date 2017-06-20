import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'tr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() formValue: string;
  @Input() placeholder = '';
  @Output() submitted = new EventEmitter<string>();

  constructor() { }

  clearForm() {
    this.formValue = '';
  }

  submitForm() {
    this.submitted.emit(this.formValue);
  }

}
