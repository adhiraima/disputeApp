import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { Hash } from 'underscore'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private panels = {};
  private selectedPanel: string;

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
  }

  showNewDispTab(event) {
    this.panels["dispute:"+event.data.disputeid] = "disputePanel";
    this.selectedPanel = "dispute:"+event.data.disputeid;
  }

  selectTab(event) {
    this.selectedPanel = this.keys()[event.index];
  }

  checkSelected(header) {
    return this.selectedPanel === header ? true : false;
  }
}
