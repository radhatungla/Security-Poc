import { Component, OnInit,ElementRef } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { VpnDataService } from '../services/vpn-data.service';
@Component({
  selector: 'app-probability-graph',
  templateUrl: './probability-graph.component.html',
  styleUrls: ['./probability-graph.component.css']
})
export class ProbabilityGraphComponent implements OnInit {

  subscription: any;
  public global:boolean=true;
    constructor(private _VpnDataService:VpnDataService) { 
      this.subscription = this._VpnDataService.getHeading().subscribe(message => {
        this.global = message.text; 
      });
      }


  ngOnInit() {
  }

}
