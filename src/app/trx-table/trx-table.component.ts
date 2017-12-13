import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-trx-table',
  templateUrl: './trx-table.component.html',
  styleUrls: ['./trx-table.component.css']
})
export class TrxTableComponent implements OnInit {
  
  @Input() txns: Transaction[];
  @Output('txnRowClicked') 
  txnRowClicked = new EventEmitter<Transaction>(); 
  
  constructor() { }

  ngOnInit() {

  }

  openNewTxnTab(event) {
    this.txnRowClicked.emit(event);
  }
}
