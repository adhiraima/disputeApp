import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dispute } from '../models/disputes';

@Component({
  selector: 'app-dispute-table',
  templateUrl: './dispute-table.component.html',
  styleUrls: ['./dispute-table.component.css']
})



export class DisputeTableComponent implements OnInit {
  @Input() disputes: Dispute[];
  @Output('dispRowClicked') 
  dispRowClicked = new EventEmitter<Dispute>(); 
  
  constructor() { }
  
    ngOnInit() {
  
    }
  
    openNewDispTab(event) {
      this.dispRowClicked.emit(event);
    }

}
