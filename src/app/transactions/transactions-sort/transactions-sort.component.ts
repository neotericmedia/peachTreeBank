import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transactions-sort',
  templateUrl: 'transactions-sort.component.html',
  styleUrls: ['./transactions-sort.component.scss'],
})
export class TransactionsSortComponent {
  @Input('filter') filter: string;
  @Output() inputSort = new EventEmitter<String>();
  @Output() colSort = new EventEmitter<String>();

  mychange(event) {
    this.inputSort.emit(event);
  }
  colSortFunc(event) {
    this.colSort.emit(event);
  }
}
