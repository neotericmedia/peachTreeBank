import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transactions-sort',
  templateUrl: 'transactions-sort.component.html',
  styleUrls: ['./transactions-sort.component.scss'],
})
export class TransactionsSortComponent {
  @Input('filter') filter: string;
  @Output() inputSort = new EventEmitter<String>();

  mychange(event: any) {
    this.inputSort.emit(event);
  }
}
