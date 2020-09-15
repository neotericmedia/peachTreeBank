import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transfers-summary',
  templateUrl: './transfers-summary.component.html',
  styleUrls: ['./transfers-summary.component.scss'],
})
export class TransfersSummaryComponent {
  @Input() transaction: Transaction;
  @Input() balance: number;

  @Output() transferMade: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private transactionService: TransactionService) {}

  makeTransfer() {
    this.transactionService.addTransaction(this.transaction);
    this.transferMade.emit(this.transaction.amount);
  }

  back() {
    this.cancel.emit();
  }
}
