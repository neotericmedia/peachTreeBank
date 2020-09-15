import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TransfersFormComponent } from './transfers/transfers-form/transfers-form.component';
import { TransfersSummaryComponent } from './transfers/transfers-summary/transfers-summary.component';
import { TransactionsSortComponent } from './transactions/transactions-sort/transactions-sort.component';
import { SearchPipe } from './pipes/search.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransfersComponent,
    TransfersFormComponent,
    TransfersSummaryComponent,
    TransactionsSortComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
