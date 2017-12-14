import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dispute } from '../models/disputes';
import { DisputeService } from '../services/dispute-service';

@Component({
  selector: 'app-dispute-table',
  templateUrl: './dispute-table.component.html',
  styleUrls: ['./dispute-table.component.css']
})



export class DisputeTableComponent implements OnInit {
  @Input() disputes: Dispute[];
  @Output('dispRowClicked') 
  dispRowClicked = new EventEmitter<Dispute>(); 
  
  constructor(private disputeService: DisputeService) { 
    console.log("constructoe in disp panel called");
  }
  
  ngOnInit() {
    console.log("init called in dispute panel");
    this.disputes = this.disputeService.getCurrentDisputes();
  }

  openNewDispTab(event) {
    this.dispRowClicked.emit(event);
  }
}
