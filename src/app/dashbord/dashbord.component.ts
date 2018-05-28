import { Component, OnInit } from '@angular/core';

import { VpnDataService } from '../services/vpn-data.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

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
