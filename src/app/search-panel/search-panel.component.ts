import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dispute } from '../models/disputes';
import { Transaction } from '../models/transaction'
import { DisputeService } from '../services/dispute-service';
import { TransactionService } from '../services/transaction-service';
import { DisputeTableComponent } from '../dispute-table/dispute-table.component'

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  mainHeight: number;
  searchWidth: number;
  searchFieldsWidth: number;
  dateFrom: Date;
  dateTo: Date;
  customerID: string;
  phone: string;
  email: string;
  account: string;
  transactions: Transaction[];
  disputes: Dispute[];
  disputesPageNum: number;
  trxnPageNum: number;

  @Output('openMainTxnTab')
  openMainTxnTab = new EventEmitter<Transaction>();

  @Output('openMainDispTab')
  openMainDispTab = new EventEmitter<Dispute>();

  constructor(private disputeService: DisputeService, 
      private transactionService: TransactionService) { 
    this.mainHeight = (window.innerHeight * 90) / 100;
    this.searchWidth = 90;
    this.searchFieldsWidth = 18;
    this.disputesPageNum = 1;
    this.trxnPageNum = 1;
  }

  ngOnInit() {
    console.log("Main loaded!!");
  }

  searchForData() {
    this.disputes = this.disputeService.getDisputes(this.disputesPageNum);
    this.transactions = this.transactionService.getTransactions(this.trxnPageNum);
  }

  clear() {
    this.email = "";  
    this.customerID = "";
    this.phone = "";
    this.dateFrom = null;
    this.dateTo = null;
    this.account = "";
    this.transactions = [];
    this.disputes = [];
  }

  showNewTxnTab(event) {
    this.openMainTxnTab.emit(event);
  }

  showNewDispTab(event) {
    this.openMainDispTab.emit(event);
  }
}
