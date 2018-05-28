import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { VpnDataService } from '../services/vpn-data.service';
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
  constructor(private vpnService : VpnDataService) { }

  ngOnInit() {
 this.vpnService.heatMapCall().subscribe (response=>{ 
   var data=[];
   data = response;
  //  [{"day":1,"hour":1,"count":16},{"day":1,"hour":2,"count":20},{"day":1,"hour":3,"count":0},{"day":1,"hour":4,"count":0},{"day":1,"hour":5,"count":0},{"day":1,"hour":6,"count":2},{"day":1,"hour":7,"count":0},{"day":1,"hour":8,"count":9},{"day":1,"hour":9,"count":25},{"day":1,"hour":10,"count":49},{"day":1,"hour":11,"count":57},{"day":1,"hour":12,"count":61},{"day":1,"hour":13,"count":37},{"day":1,"hour":14,"count":66},{"day":1,"hour":15,"count":70},{"day":1,"hour":16,"count":55},{"day":1,"hour":17,"count":51},{"day":1,"hour":18,"count":55},{"day":1,"hour":19,"count":17},{"day":1,"hour":20,"count":20},{"day":1,"hour":21,"count":9},{"day":1,"hour":22,"count":4},{"day":1,"hour":23,"count":0},{"day":1,"hour":24,"count":12},{"day":2,"hour":1,"count":6},{"day":2,"hour":2,"count":2},{"day":2,"hour":3,"count":0},{"day":2,"hour":4,"count":0},{"day":2,"hour":5,"count":0},{"day":2,"hour":6,"count":2},{"day":2,"hour":7,"count":4},{"day":2,"hour":8,"count":11},{"day":2,"hour":9,"count":28},{"day":2,"hour":10,"count":49},{"day":2,"hour":11,"count":51},{"day":2,"hour":12,"count":47},{"day":2,"hour":13,"count":38},{"day":2,"hour":14,"count":65},{"day":2,"hour":15,"count":60},{"day":2,"hour":16,"count":50},{"day":2,"hour":17,"count":65},{"day":2,"hour":18,"count":50},{"day":2,"hour":19,"count":22},{"day":2,"hour":20,"count":11},{"day":2,"hour":21,"count":12},{"day":2,"hour":22,"count":9},{"day":2,"hour":23,"count":0},{"day":2,"hour":24,"count":13},{"day":3,"hour":1,"count":5},{"day":3,"hour":2,"count":8},{"day":3,"hour":3,"count":8},{"day":3,"hour":4,"count":0},{"day":3,"hour":5,"count":0},{"day":3,"hour":6,"count":2},{"day":3,"hour":7,"count":5},{"day":3,"hour":8,"count":12},{"day":3,"hour":9,"count":34},{"day":3,"hour":10,"count":43},{"day":3,"hour":11,"count":54},{"day":3,"hour":12,"count":44},{"day":3,"hour":13,"count":40},{"day":3,"hour":14,"count":48},{"day":3,"hour":15,"count":54},{"day":3,"hour":16,"count":59},{"day":3,"hour":17,"count":60},{"day":3,"hour":18,"count":51},{"day":3,"hour":19,"count":21},{"day":3,"hour":20,"count":16},{"day":3,"hour":21,"count":9},{"day":3,"hour":22,"count":5},{"day":3,"hour":23,"count":4},{"day":3,"hour":24,"count":7},{"day":4,"hour":1,"count":0},{"day":4,"hour":2,"count":0},{"day":4,"hour":3,"count":0},{"day":4,"hour":4,"count":0},{"day":4,"hour":5,"count":0},{"day":4,"hour":6,"count":2},{"day":4,"hour":7,"count":4},{"day":4,"hour":8,"count":13},{"day":4,"hour":9,"count":26},{"day":4,"hour":10,"count":58},{"day":4,"hour":11,"count":61},{"day":4,"hour":12,"count":59},{"day":4,"hour":13,"count":53},{"day":4,"hour":14,"count":54},{"day":4,"hour":15,"count":64},{"day":4,"hour":16,"count":55},{"day":4,"hour":17,"count":52},{"day":4,"hour":18,"count":53},{"day":4,"hour":19,"count":18},{"day":4,"hour":20,"count":3},{"day":4,"hour":21,"count":9},{"day":4,"hour":22,"count":12},{"day":4,"hour":23,"count":2},{"day":4,"hour":24,"count":8},{"day":5,"hour":1,"count":2},{"day":5,"hour":2,"count":0},{"day":5,"hour":3,"count":8},{"day":5,"hour":4,"count":2},{"day":5,"hour":5,"count":0},{"day":5,"hour":6,"count":2},{"day":5,"hour":7,"count":4},{"day":5,"hour":8,"count":14},{"day":5,"hour":9,"count":31},{"day":5,"hour":10,"count":48},{"day":5,"hour":11,"count":46},{"day":5,"hour":12,"count":50},{"day":5,"hour":13,"count":66},{"day":5,"hour":14,"count":54},{"day":5,"hour":15,"count":56},{"day":5,"hour":16,"count":67},{"day":5,"hour":17,"count":54},{"day":5,"hour":18,"count":23},{"day":5,"hour":19,"count":14},{"day":5,"hour":20,"count":6},{"day":5,"hour":21,"count":8},{"day":5,"hour":22,"count":7},{"day":5,"hour":23,"count":0},{"day":5,"hour":24,"count":8},{"day":6,"hour":1,"count":2},{"day":6,"hour":2,"count":0},{"day":6,"hour":3,"count":2},{"day":6,"hour":4,"count":0},{"day":6,"hour":5,"count":0},{"day":6,"hour":6,"count":0},{"day":6,"hour":7,"count":4},{"day":6,"hour":8,"count":8},{"day":6,"hour":9,"count":8},{"day":6,"hour":10,"count":6},{"day":6,"hour":11,"count":14},{"day":6,"hour":12,"count":12},{"day":6,"hour":13,"count":9},{"day":6,"hour":14,"count":14},{"day":6,"hour":15,"count":0},{"day":6,"hour":16,"count":4},{"day":6,"hour":17,"count":7},{"day":6,"hour":18,"count":6},{"day":6,"hour":19,"count":0},{"day":6,"hour":20,"count":0},{"day":6,"hour":21,"count":0},{"day":6,"hour":22,"count":0},{"day":6,"hour":23,"count":0},{"day":6,"hour":24,"count":0},{"day":7,"hour":1,"count":7},{"day":7,"hour":2,"count":6},{"day":7,"hour":3,"count":0},{"day":7,"hour":4,"count":0},{"day":7,"hour":5,"count":0},{"day":7,"hour":6,"count":0},{"day":7,"hour":7,"count":0},{"day":7,"hour":8,"count":0},{"day":7,"hour":9,"count":0},{"day":7,"hour":10,"count":0},{"day":7,"hour":11,"count":2},{"day":7,"hour":12,"count":2},{"day":7,"hour":13,"count":5},{"day":7,"hour":14,"count":6},{"day":7,"hour":15,"count":0},{"day":7,"hour":16,"count":4},{"day":7,"hour":17,"count":0},{"day":7,"hour":18,"count":2},{"day":7,"hour":19,"count":10},{"day":7,"hour":20,"count":7},{"day":7,"hour":21,"count":0},{"day":7,"hour":22,"count":19},{"day":7,"hour":23,"count":9},{"day":7,"hour":24,"count":4}];

    var margin = { top: 50, right: 0, bottom: 100, left: 30 },
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
    
    var svg = d3.select("#heatmap").append("svg")
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
    .attr("x", function(d) { return (d.hour - 1) * gridSize; })
    .attr("y", function(d) { return (d.day - 1) * gridSize; })
    .attr("rx", 4)
    .attr("ry", 4)
    .attr("class", "hour bordered")
    .attr("width", gridSize)
    .attr("height", gridSize)
    .style("fill", colors[0]);
  
  heatMap.transition().duration(1000)
  .style("fill", function(d) {console.log('heatMap', colorScale(d.count)); return colorScale(d.count); });
  heatMap.append("title").text(function(d) {console.log('append', d); return d.count; });
});
  }

  


}
