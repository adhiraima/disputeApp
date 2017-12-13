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
    this.panels["search"] = "searchPanel";
    this.panels["txn:tr1"] = "transactionPanel";
    this.panels["dispute:d1"] = "disputePanel";
  }
  ngOnInit() {
    console.log("Main loaded!!");
  }

  public addPanel(component: string, id:string) {
    this.panels[component + ":" + id] = component;
  }

  public removePanel(index: number) {
    this.panels
  }

  keys() : Array<string> {
    return Object.keys(this.panels);
  }

  public showNewTxnTab(event) {
    this.panels["txn:"+event.data.trxid] = "transactionPanel";
    this.selectedPanel = "txn:"+event.data.trxid;
  }

  public showNewDispTab(event) {
    this.panels["dispute:"+event.data.disputeid] = "disputePanel";
    this.selectedPanel = "dispute:"+event.data.disputeid;
  }

  selectTab(header) {
    this.selectedPanel = header;
  }
}
