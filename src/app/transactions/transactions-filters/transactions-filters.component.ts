import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';

// import { Transaction } from '../models/transaction.model';
// import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions-filters',
  templateUrl: './transactions-filters.component.html',
})
export class TransactionsFiltersComponent {
  filter = '';
  // transactions$: Observable<Transaction[]>;
  // constructor(private transactionService: TransactionService) {}
  // ngOnInit(): void {
  //   this.transactions$ = this.transactionService.transaction$;
  // }
}
