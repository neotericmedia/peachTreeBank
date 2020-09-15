import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { Transactions } from '../api/data';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  balance = 5824.75;
  transactions = Transactions;
  transaction$: BehaviorSubject<Transaction[]> = new BehaviorSubject<
    Transaction[]
  >(this.transactions.data);

  constructor() {}

  addTransaction(transaction: Transaction): any {
    this.transaction$.next([transaction, ...this.transaction$.getValue()]);
  }
}
