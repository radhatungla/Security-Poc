import { Component, OnInit } from '@angular/core';
import { VpnDataService } from '../../services/vpn-data.service';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.css']
})
export class TeamDataComponent implements OnInit {
  teamData: any = [];
  public value: Date = new Date(2000, 2, 10);
  constructor(private serviceData: VpnDataService) {

      this.serviceData.getManagesyData().subscribe(data=>{
        this.teamData = data['manages'];
      });
   }
  
  ngOnInit() {
  }

  

}
