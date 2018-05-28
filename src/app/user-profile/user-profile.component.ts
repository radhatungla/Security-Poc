import { Component, OnInit } from '@angular/core';
import { VpnDataService } from '../services/vpn-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileObj: any = {};
  contactDetails: any = {}; 
  profileDetails = {};
  constructor(private vpnService : VpnDataService) {
    
   }

  ngOnInit() {
    this.getPeopleData();
  }
  
  getPeopleData() {
    
    this.vpnService.userProfile().subscribe(data => {
      
       this.profileObj = data;
       

       this.contactDetails =  data['contactInformation'];
       //  this.badgeLinks  = data['activities']['badge'];
  
        for (let i = 0; i < this.profileObj.length; i++) {
          //this.contactInformation = data[i]['contactInformation'];
          this.profileDetails =  data[i]
         
        }
        //console.log('links',this.profileObj); 

    });
  }
}
