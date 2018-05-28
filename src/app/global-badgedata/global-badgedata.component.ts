import { Component, OnInit } from '@angular/core';
import { VpnDataService } from '../services/vpn-data.service';
@Component({
  selector: 'app-global-badgedata',
  templateUrl: './global-badgedata.component.html',
  styleUrls: ['./global-badgedata.component.css']
})
export class GlobalBadgedataComponent implements OnInit {
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
