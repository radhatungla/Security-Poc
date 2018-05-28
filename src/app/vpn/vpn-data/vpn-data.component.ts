import { Component, OnInit } from '@angular/core';
declare var kendoDateTimePicker:any;
declare var $:any;
declare var datedata:any;
declare var kendo:any;
@Component({
  selector: 'app-vpn-data',
  templateUrl: './vpn-data.component.html',
  styleUrls: ['./vpn-data.component.css']
})
export class VpnDataComponent implements OnInit {

  day: any;
  data: boolean=false;
  startDate: any;
  startTime: any;
  dateData: any;
   weekday: any = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  constructor() { }

  ngOnInit() {
    $("#datetimepicker").kendoDateTimePicker({
      timeFormat: "HH:mm" //24 hours format
  });
  }
calculate(){
  this.data=true;
  this.dateData = datedata;
  let dayValue=kendo.toString($("#datetimepicker").data("kendoDateTimePicker").value().getDay());
  this.day=this.weekday[dayValue];
  this.startDate = kendo.toString($("#datetimepicker").data("kendoDateTimePicker").value(), 'MM/dd/yyyy').split("/")[1];
  this.startTime = kendo.toString($("#datetimepicker").data("kendoDateTimePicker").value(), 'hh:mm tt').split(":")[0];
  }
}
