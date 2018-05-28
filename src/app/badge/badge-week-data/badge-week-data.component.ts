// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-badge-week-data',
//   templateUrl: './badge-week-data.component.html',
//   styleUrls: ['./badge-week-data.component.css']
// })
// export class BadgeWeekDataComponent implements OnInit {

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
  selector: 'app-badge-week-data',
   templateUrl: './badge-week-data.component.html',
  styleUrls: ['./badge-week-data.component.css']
})
export class BadgeWeekDataComponent implements OnInit {  
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

    this.vpnService.getVpnDataByWeek().subscribe (data=>{   
        
      let vpnObj = []

      for (let i = 0; i < data.length; i++) {
        let obj = [];       
        obj[i] = data[i]['global_badgecount_by_weekday'];
        vpnObj = obj[i]
      }

console.log(vpnObj);
      this.svg = d3.select(this.container.nativeElement).select("svg");;
      this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
      this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
      this.g = this.svg.append("g")
                       .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
      //this.initAxis();
  
      this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
      this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
      this.x.domain(vpnObj.map((d) => d.bucket_weekday));
      this.y.domain([0, d3.max(vpnObj, (d) => d.count)]);
      //this.drawAxis();
  
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
        .attr("x", (d) => this.x(d.bucket_weekday) )
        .attr("y", (d) => this.y(d.count) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.count) );

  });
}

}


