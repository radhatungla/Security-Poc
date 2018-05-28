import { Component, OnInit, ElementRef } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { VpnDataService } from '../services/vpn-data.service';
@Component({
  selector: 'app-badge-pie-chart',
  templateUrl: './badge-pie-chart.component.html',
  styleUrls: ['./badge-pie-chart.component.css']
})
export class BadgePieChartComponent implements OnInit {

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;

  constructor(private dataService: VpnDataService,  private container: ElementRef) {
    this.svg = d3.select(this.container.nativeElement).select("svg");
    this.width = 300 - this.margin.left - this.margin.right;
    this.height = 300 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  ngOnInit() {
    this.initSvg();
    this.drawPie();
  }

  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
      .range(["#ff6358", "#ff6358", "#000", "#fff", "#cccc", "#ddd", "#ff6358"]);
    this.arc = d3Shape.arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);
    this.labelArc = d3Shape.arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);
    this.pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.occurances);
    this.svg = d3.select("#piechart")
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }

  private drawPie() {
    this.dataService.getPieData().subscribe(data => {
      let obj = [];

      // for (let i = 0; i < data.length; i++) {
      //   obj[i] = data[i]['occurances'];
      // }

      let g = this.svg.selectAll(".arc")
        .data(this.pie(data))
        .enter().append("g")
        .attr("class", "arc");

      g.append("path").attr("d", this.arc)
        .style("fill", (d: any) => this.color(d.data.occurances));
        
      g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
        .attr("dy", ".75em")
        .text((d: any) => d.data.occurances);
    });
  }


}
