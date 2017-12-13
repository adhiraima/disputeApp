import { Component, OnInit, Input } from '@angular/core';
import { Dispute } from '../models/disputes';

@Component({
  selector: 'app-dispute-table',
  templateUrl: './dispute-table.component.html',
  styleUrls: ['./dispute-table.component.css']
})



export class DisputeTableComponent implements OnInit {
  @Input() disputes: Dispute[];

  ngOnInit() {
    
  }

}
