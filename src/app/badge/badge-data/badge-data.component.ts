import { Component, OnInit } from '@angular/core';
import { VpnDataService } from '../../services/vpn-data.service';

@Component({
  selector: 'app-badge-data',
  templateUrl: './badge-data.component.html',
  styleUrls: ['./badge-data.component.css']
})
export class BadgeDataComponent implements OnInit {
  badgeObj: any = {};
  constructor(private serviceData: VpnDataService) { }

  ngOnInit() {
    this.getBadge();
  }

  getBadge() {
    this.serviceData.getBadgeData().subscribe(data=>{
      this.badgeObj = data;
    })
  }

}
