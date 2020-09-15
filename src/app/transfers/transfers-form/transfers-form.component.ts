import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transfers-form',
  templateUrl: './transfers-form.component.html',
  styleUrls: ['./transfers-form.component.scss'],
})
export class TransfersFormComponent {
  @Input() balance: number;

  @Output() formSubmit: EventEmitter<Transaction> = new EventEmitter<
    Transaction
  >();

  transferForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.transferForm = this.formBuilder.group({
      to: ['', Validators.required],
      amount: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]+(.[0-9][0-9]?)?'),
          Validators.max(this.balance + 500),
        ],
      ],
    });
  }

  submit() {
    this.formSubmit.emit(
      new Transaction(
        this.transferForm.value.amount,
        this.transferForm.value.to
      )
    );
  }
}
