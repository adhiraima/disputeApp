import { Component, OnInit } from '@angular/core';
import { Dispute } from '../models/disputes';
import { Transaction } from '../models/transaction'
import { DisputeService } from '../services/dispute-service';
import { TransactionService } from '../services/transaction-service';
import { DisputeTableComponent } from '../dispute-table/dispute-table.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mainHeight: number;
  searchWidth: number;
  searchFieldsWidth: number;
  searchFields: string[];
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

  constructor(private disputeService: DisputeService, 
      private transactionService: TransactionService) { 
    this.mainHeight = (window.innerHeight * 90) / 100;
    this.searchWidth = 90;
    this.searchFields = ["customerID", "phone", "email", "firstName", "lastName"];
    this.searchFieldsWidth = 18;
    this.disputesPageNum = 1;
    this.trxnPageNum = 1;
  }

  ngOnInit() {
    console.log("Main loaded!!");
  }

  search() {
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
}
