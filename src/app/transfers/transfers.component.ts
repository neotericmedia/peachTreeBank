import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent {
  showSummary: boolean;
  transaction: Transaction;
  balance: number;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.balance = this.transactionService.balance;
  }

  onFormSubmitting(e) {
    this.showSummary = true;
    this.transaction = e;
  }

  onTransferIsMade(e) {
    this.showSummary = false;
    this.balance -= e;
  }

  onTransferCancellation() {
    this.showSummary = false;
  }
}
