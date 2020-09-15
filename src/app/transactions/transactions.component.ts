import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  filter = '';
  order: boolean = false;
  transactions$: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactions$ = this.transactionService.transaction$;
  }

  inputSort(value) {
    this.filter = value;
  }

  colSort(value) {
    this.order = !this.order;
    this.transactions$ = this.transactions$.pipe(
      map((data) => {
        data.sort((n1: any, n2: any) => {
          switch (value) {
            case (value = 'amount'):
              return this.order ? n1.amount - n2.amount : n2.amount - n1.amount;
              break;
            case (value = 'transactionDate'):
              return this.order
                ? n1.transactionDate - n2.transactionDate
                : n2.transactionDate - n1.transactionDate;
              break;
            case (value = 'merchant'):
              return this.order
                ? n1.merchant.localeCompare(n2.merchant)
                : n2.merchant.localeCompare(n1.merchant);
              break;
            default:
          }
        });
        return data;
      })
    );
  }
}
