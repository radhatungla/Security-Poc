import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { VpnDataService } from '../services/vpn-data.service';
import { ElasticSearchServicesService } from "../services/elastic-search-services.service";
declare var $:any;
declare var kendoAutoComplete:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jsonData: any;
  heroes: any;
  listItems: any[];
  data: string[];
  constructor(private _service:AuthenticationService,private _VpnDataService:VpnDataService,private esService:ElasticSearchServicesService) { }

  ngOnInit() {
    this._service.checkCredentials();
    this.data = [
      "Albania",
      "Andorra",
      "Armenia",
      "Austria",
      "Azerbaijan",
      "Belarus",
      "Belgium",
      "Bosnia & Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedonia",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "Ukraine",
      "United Kingdom",
      "Vatican City"
  ];
   //create AutoComplete UI component
   $("#search_text_input").kendoAutoComplete({
    dataSource: this.listItems,
    filter: "startswith",
    placeholder: "Select ..."
});
  }

  eventHandler(e) {
    let name=e.currentTarget.value; 
    this._VpnDataService.getJsonData(name).subscribe(
      recent => {
        var response= recent.hits.hits;
        this.listItems=[];
        for (var i = 0; i < response.length; i++) {
          this.listItems.push(response[i]._source.displayName);
        }
        $("#search_text_input").data("kendoAutoComplete").setDataSource(this.listItems);
       
      });
      
}
logout() {
    this._service.logout();
}

}
