import { Component } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent {
  showSummary: boolean;
  transaction: Transaction;
  balance = 5824.75;

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
