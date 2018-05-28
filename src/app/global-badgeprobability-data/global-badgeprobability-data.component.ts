import { Component, OnInit } from '@angular/core';
import { VpnDataService } from '../services/vpn-data.service';
@Component({
  selector: 'app-global-badgeprobability-data',
  templateUrl: './global-badgeprobability-data.component.html',
  styleUrls: ['./global-badgeprobability-data.component.css']
})
export class GlobalBadgeprobabilityDataComponent implements OnInit {

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
