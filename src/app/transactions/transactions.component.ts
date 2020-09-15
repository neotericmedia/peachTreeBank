import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  filter = '';
  transactions$: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionService.transaction$;
  }

  inputSort(name) {
    this.filter = name;
  }
}
