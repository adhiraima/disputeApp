import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-panel',
  templateUrl: './transaction-panel.component.html',
  styleUrls: ['./transaction-panel.component.css']
})
export class TransactionPanelComponent implements OnInit {
  @Input()
  private transaction: Transaction;
  constructor() { }

  ngOnInit() {
  }

  keys() {
    return Object.keys(this.transaction);
  }

  createDispute() {
    console.log("Creating dispute");
  }
}
