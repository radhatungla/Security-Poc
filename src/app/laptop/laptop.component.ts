import { Component, OnInit } from '@angular/core';
import { VpnDataService } from '../services/vpn-data.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  laptopObj: any;
  constructor(private dataService: VpnDataService) {
    this.dataService.getLaptopData().subscribe(data => {
      console.log(data);
    });

   }

  ngOnInit() {
  }

}
