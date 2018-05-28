// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-badge-day-data',
//   templateUrl: './badge-day-data.component.html',
//   styleUrls: ['./badge-day-data.component.css']
// })
// export class BadgeDayDataComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit, ElementRef } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { VpnDataService } from '../../services/vpn-data.service';
 
@Component({
  selector: 'app-badge-day-data',
  templateUrl: './badge-day-data.component.html',
   styleUrls: ['./badge-day-data.component.css']
})
export class BadgeDayDataComponent implements OnInit {  
  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};
  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  constructor(private vpnService : VpnDataService, private container: ElementRef) {
     }

  ngOnInit() {

    this.vpnService.getBadgeUserDayData().subscribe (data=>{   
        
      let vpnObj = []
      vpnObj = data['global_badgecount_by_day']
      // for (let i = 0; i < data.length; i++) {
      //   let obj = [];       
      //   obj[i] = data[i]['global_badgecount_by_hour'];
      //   vpnObj = obj[i]
      // }

      this.svg = d3.select(this.container.nativeElement).select("svg");
      this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
      this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
      this.g = this.svg.append("g")
                       .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
      //this.initAxis();
  
      this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
      this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
      this.x.domain(vpnObj.map((d) => d.bucket_day));
      this.y.domain([0, d3.max(vpnObj, (d) => d.count)]);
      //this.drawAxis();
      // console.log('222' + this.x + this.x);

      this.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x));
      this.g.append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(this.y))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("count");
     // this.drawBars();
     
        this.g.selectAll(".bar")
        .data(vpnObj)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.x(d.bucket_day) )
        .attr("y", (d) => this.y(d.count) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.count) );

  });
}

}

