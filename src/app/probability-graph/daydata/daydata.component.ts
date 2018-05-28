import { Component, OnInit, ElementRef } from '@angular/core';
import { VpnDataService } from '../../services/vpn-data.service';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
@Component({
  selector: 'app-daydata',
  templateUrl: './daydata.component.html',
  styleUrls: ['./daydata.component.css']
})
export class DaydataComponent implements OnInit {

  global_alltime_vpncount: any;
  indexes: any=[];
  dynamicGraph(data): any {
    let vpnObj = [];
   
    // for (let i = 0; i < data.length; i++) {
    //   let obj = [];       
    //   obj[i] = data[i]['global_vpncount_by_day'];
    //   vpnObj = obj[i]
    // }
    d3.select('#vpnDay').selectAll('svg').remove();
   // vpnObj= data.text['global_vpncount_by_day'];
    if(data.text.status==='global'){
      vpnObj= data.text[0]['global_vpncount_by_day'];
      this.global_alltime_vpncount=data.text[0].global_alltime_vpncount;
    } else{
      vpnObj= data.text['user_vpncount_by_day'];
      this.global_alltime_vpncount=data.text.user_vpncount_alltime;
    }
      this.svg =  d3.select(this.container.nativeElement).select("svg");
      this.width = this.svg.attr("width") - this.margin.left - this.margin.right;
      this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
      this.g = this.svg.append("g")
                       .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
      //this.initAxis();
  
      this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
      this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
     
        this.x.domain(vpnObj.map((d) => d.bucket_day));
      this.y.domain([0, d3Array.max(vpnObj, (d) => d.count/this.global_alltime_vpncount)]);
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
        .attr("x", (d) => this.x(d.bucket_day) )
        .attr("y", (d) => this.y(d.count) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.count) );

  }
  message: any;
  subscription: any;
private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};
  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  constructor(private vpnService : VpnDataService,  private container: ElementRef) {
    this.subscription = this.vpnService.getproVpnDtaForDate().subscribe(message => { 
      this.message = message; 
        this.dynamicGraph(message);
        // if(this.message.text[0].hasOwnProperty('bucket_hour')&&this.indexes.indexOf("bucket_hour")!==-1){
        //   this.indexes.push('bucket_hour');
        //   this.dynamicGraph(message);
        // } else if(this.message.text[0].hasOwnProperty('bucket_day')&&this.indexes.indexOf("bucket_day")!==-1){
        //   this.indexes.push('bucket_day');
        //   this.dynamicGraph(message);
        // } else if(this.message.text[0].hasOwnProperty('bucket_weekday')&&this.indexes.indexOf("bucket_weekday")!==-1){
        //   this.indexes.push('bucket_weekday');
        //   this.dynamicGraph(message);
        // }
      
    });
     }


  ngOnInit() {
  //   this.vpnService.getVpnDataByWeek().subscribe (data=>{   
        
  //     let vpnObj = [];
  //     this.global_alltime_vpncount=data[0].global_alltime_vpncount;
  //     for (let i = 0; i < data.length; i++) {
  //       let obj = [];       
  //       obj[i] = data[i]['global_vpncount_by_day'];
  //       vpnObj = obj[i]
  //     }

  //     this.svg =  d3.select(this.container.nativeElement).select("svg");
  //     this.width = this.svg.attr("width") - this.margin.left - this.margin.right;
  //     this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
  //     this.g = this.svg.append("g")
  //                      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  //     //this.initAxis();
  
  //     this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
  //     this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
  //     this.x.domain(vpnObj.map((d) => d.bucket_day));
  //     this.y.domain([0, d3Array.max(vpnObj, (d) => d.count/this.global_alltime_vpncount)]);
  //     //this.drawAxis();
  
  //     this.g.append("g")
  //           .attr("class", "axis axis--x")
  //           .attr("transform", "translate(0," + this.height + ")")
  //           .call(d3Axis.axisBottom(this.x));
  //     this.g.append("g")
  //           .attr("class", "axis axis--y")
  //           .call(d3Axis.axisLeft(this.y))
  //           .append("text")
  //           .attr("class", "axis-title")
  //           .attr("transform", "rotate(-90)")
  //           .attr("y", 6)
  //           .attr("dy", "0.71em")
  //           .attr("text-anchor", "end")
  //           .text("count");
  //    // this.drawBars();
     
  //       this.g.selectAll(".bar")
  //       .data(vpnObj)
  //       .enter().append("rect")
  //       .attr("class", "bar")
  //       .attr("x", (d) => this.x(d.bucket_day) )
  //       .attr("y", (d) => this.y(d.count) )
  //       .attr("width", this.x.bandwidth())
  //       .attr("height", (d) => this.height - this.y(d.count) );

  // });
  }


}
