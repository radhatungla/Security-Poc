import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VpnDataService } from '../services/vpn-data.service';
import { TemplateParseResult } from '@angular/compiler';
declare var $:any;
declare var kendoAutoComplete:any;
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
result:boolean=false;
  autosuggistionresponse: any;
  autocomplete: any;
  displayName:any ='';
  graphResults:any = [];
  x = ['Windstorm', 'Bombasto', 'Magneta'];
  searchActive:boolean = false;
  constructor(private router: Router,private _VpnDataService:VpnDataService) { }
public activePath:any='badge';
jsonData: any;
heroes: any;
listItems: any[];
data: string[];
loadingmsg:any="Loading......"
ngOnInit() {
  this._VpnDataService.getglobalJsonData().subscribe(
    global => {
      global.status="global";
      this._VpnDataService.sendDtaForHour(global);
      this._VpnDataService.sendDtaForWeek(global);
      this._VpnDataService.sendDtaForDate(global);
      this._VpnDataService.sendproDtaForHour(global);
      this._VpnDataService.sendproDtaForWeek(global);
      this._VpnDataService.sendproDtaForDate(global);
      this._VpnDataService.sendVpnDtaForHour(global);
      this._VpnDataService.sendVpnDtaForWeek(global);
      this._VpnDataService.sendVpnDtaForDate(global);
      this._VpnDataService.sendproVpnDtaForHour(global);
      this._VpnDataService.sendproVpnDtaForWeek(global);
      this._VpnDataService.sendproVpnDtaForDate(global);
    });
  var instance = this;
  this.searchActive=false;
 //create AutoComplete UI component
$("#search_text_input1").kendoAutoComplete({
  dataSource: [],
  filter: "contains",
     placeholder: "Select ...",
  // dataTextField: "Name", //JSON property name to use
  //   dataValueField: "dbKey",
  select:function (e){
    
   
    var value=e.dataItem;
    instance.searchActive=true;
    instance.autosuggistionresponse.forEach(element => {
     // instance.autosuggistionresponse.push(element._source.displayName);
      if(element._source.displayName===value){
        instance.graphResults={};
        this.result=false;
        instance._VpnDataService.searchResult(element._source.dbKey).subscribe(
          result => {
            this.result=true;
            
            instance.displayName=result.displayName;
            instance.graphResults={};
            instance.graphResults= result;
            instance.graphResults.status="user";
           // sendMessage(): void {
              // send message to subscribers via observable subject
              
         // }
         instance.testing(instance.graphResults);
          });
      }
    });
  }
});

}
testing(obj){
 $("svg").empty();
 this._VpnDataService.setHeading(false);
  this._VpnDataService.sendDtaForHour(obj);
  this._VpnDataService.sendDtaForWeek(obj);
  this._VpnDataService.sendDtaForDate(obj);
  this._VpnDataService.sendproDtaForHour(obj);
  this._VpnDataService.sendproDtaForDate(obj);
  this._VpnDataService.sendproDtaForWeek(obj);
  this._VpnDataService.sendVpnDtaForHour(obj);
  this._VpnDataService.sendVpnDtaForWeek(obj);
  this._VpnDataService.sendVpnDtaForDate(obj);
  this._VpnDataService.sendproVpnDtaForHour(obj);
  this._VpnDataService.sendproVpnDtaForWeek(obj);
  this._VpnDataService.sendproVpnDtaForDate(obj);
  // obj.forEach(element => {
  //   if(element[0].hasOwnProperty('bucket_hour')){
  //     this._VpnDataService.sendDtaForHour(element);
  //   }
  //   else if(element[0].hasOwnProperty('bucket_weekday')){
  //     this._VpnDataService.sendDtaForWeek(element);
  //   }else if(element[0].hasOwnProperty("bucket_day")){
  //     this._VpnDataService.sendDtaForDate(element);
  //   }
  // });
 
  //this._VpnDataService.sendDtaForDate(this.graphResults[i]);
}
eventHandler(e) {
  let name=e.currentTarget.value; 
  this._VpnDataService.getJsonData(name).subscribe(
    recent => {
      this.autosuggistionresponse=[];
      this.autosuggistionresponse= recent.hits.hits;
      this.listItems=[];
      //console.log( response[0]);
      this.autosuggistionresponse.forEach(element => {
        this.listItems.push(element._source.displayName);
      });
      var autocomplete = $("#search_text_input1").data("kendoAutoComplete").dataSource.data(this.listItems);
    });
    
}
reloadWindow(){
  window.location.reload();
}

}
