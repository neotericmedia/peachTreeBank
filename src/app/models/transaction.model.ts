export class Transaction {
  amount: string;
  categoryCode: string;
  merchant: string;
  merchantLogo: string;
  transactionDate: number;
  transactionType: string;

  constructor(amount: string, merchant: string, merchantLogo?: string) {
    this.amount = amount;
    this.merchant = merchant;
    this.merchantLogo = merchantLogo;
    this.transactionType = 'Web Transfer';
    this.categoryCode = '#ee7033';
    this.transactionDate = new Date().getTime();
  }
}
