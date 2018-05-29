import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { VpnDataService } from '../services/vpn-data.service';
declare var $:any;
@Component({
  selector: 'app-badgeheatmap',
  templateUrl: './badgeheatmap.component.html',
  styleUrls: ['./badgeheatmap.component.css']
})
export class BadgeheatmapComponent implements OnInit {

  data: any=[{
    'hour':'',
    'count':'',

  }];
  subscription: any;
public global:boolean=true;
  constructor(private vpnService:VpnDataService) { 
    this.subscription = this.vpnService.getHeading().subscribe(message => {
      this.global = message.text; 
    });
    }
  

  ngOnInit() {
 this.vpnService.heatMapCall().subscribe (response=>{ 
   var data=[];
   debugger;
   data=response;
   $("#heatmap > div").empty();
   var margin = { top: 20, right: 0, bottom: 60, left: 30 },
   width = 960 - margin.left - margin.right,
   height = 430 - margin.top - margin.bottom,
   gridSize = Math.floor(width / 24),
   legendElementWidth = gridSize*2,
   buckets = 9,
   colors:any = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"], // alternatively colorbrewer.YlGnBu[9]
   days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
   times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];

   var colorScale = d3.scaleThreshold()
   .domain([0, 3, 10, 30])
   .range([0].concat(colors));

var svg = d3.select("#heatmap div").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dayLabels = svg.selectAll(".dayLabel")
.data(days)
.enter().append("text")
.text(function (d) {return d; })
.attr("x", 0)
.attr("y", function (d, i) {console.log('dayLabels- y', d); return i * gridSize; })
.style("text-anchor", "end")
.attr("transform", "translate(-6," + gridSize / 1.5 + ")")
.attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });


var timeLabels = svg.selectAll(".timeLabel")
.data(times)
.enter().append("text")
.text(function(d) { return d; })
.attr("x", function(d, i) { return i * gridSize; })
.attr("y", 0)
.style("text-anchor", "middle")
.attr("transform", "translate(" + gridSize / 2 + ", -6)")
.attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });

   var heatMap = svg.selectAll(".hour")
    .data(data)
    .enter().append("rect")
    .attr("x", function(d) { return (d.hour) * gridSize; })
    .attr("y", function(d) { return (d.day) * gridSize; })
    .attr("rx", 4)
    .attr("ry", 4)
    .attr("class", "hour bordered")
    .attr("width", gridSize)
    .attr("height", gridSize)
    .style("fill", 'steelblue');
  
  //  heatMap.transition().duration(1000)
  //  .style("fill", function(d) {console.log('heatMap', colorScale(d.count)); return colorScale(d.count); });
  heatMap.append("title").text(function(d) {return d.count; });
});
  }

  


}
