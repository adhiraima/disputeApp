import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { Hash } from 'underscore'
import { Transaction } from '../models/transaction';
import { Dispute } from '../models/disputes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private panels = {};
  private selectedPanel: string;
  private currTxn: Transaction;
  private currDisp: Dispute;

  constructor() {
    console.log("constructor called");
    this.panels["search"] = "searchPanel";
    this.selectedPanel = "search";
  }

  ngOnInit() {
    console.log("Main loaded!!");
  }

  keys() : Array<string> {
    return Object.keys(this.panels);
  }

  showNewTxnTab(event) {
    this.panels["txn:"+event.data.trxid] = "transactionPanel";
    this.selectedPanel = "txn:"+event.data.trxid;
    this.currTxn = event.data;
  }

  showNewDispTab(event) {
    this.panels["dispute:"+event.data.disputeid] = "disputePanel";
    this.selectedPanel = "dispute:"+event.data.disputeid;
    this.currDisp = event.data;
  }

  selectTab(event) {
    this.selectedPanel = this.keys()[event.index];
  }

  checkSelected(header) {
    return this.selectedPanel === header ? true : false;
  }

  closeRelatedTabs() {
    this.panels = {};
    this.panels["search"] = "searchPanel";
  }
}
