import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'app-trx-table',
  templateUrl: './trx-table.component.html',
  styleUrls: ['./trx-table.component.css']
})
export class TrxTableComponent implements OnInit {
  
  @Input() txns: Transaction[];
  @Output('txnRowClicked') 
  txnRowClicked = new EventEmitter<Transaction>(); 
  
  constructor(private transactionService: TransactionService) { 
    console.log("trxn table called");
  }

  ngOnInit() {
    this.txns = this.transactionService.getCurrentTransactions();
  }

  openNewTxnTab(event) {
    this.txnRowClicked.emit(event);
  }
}
