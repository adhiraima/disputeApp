import { Component, OnInit, Input } from '@angular/core';
import { Dispute } from '../models/disputes';

@Component({
  selector: 'app-dispute-panel',
  templateUrl: './dispute-panel.component.html',
  styleUrls: ['./dispute-panel.component.css']
})
export class DisputePanelComponent implements OnInit {
  @Input()
  private dispute: Dispute;
  constructor() { }

  ngOnInit() {
  }

  keys() {
    return Object.keys(this.dispute);
  }

  resolveDispute() {
    console.log("Resolving dispute!");
  }

  reopenDispute() {
    console.log("Reopening dispute");
  }
}
