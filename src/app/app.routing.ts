import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VpnDataComponent } from './vpn/vpn-data/vpn-data.component';
import { BadgeDataComponent } from './badge/badge-data/badge-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TeamDataComponent } from './team/team-data/team-data.component';
import { LaptopComponent } from './laptop/laptop.component';

import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [

  {path:'login',  component: LoginComponent},
  
    
  { path: 'main', component: MainComponentComponent},
  { path: 'Home', component: DashboardComponent, 
children:[
  {path:'profile',  component: UserProfileComponent},
  { path: 'Vpn/vpndata', component: VpnDataComponent},
  { path: 'Badge/badgedata', component: BadgeDataComponent},
  { path: 'teamData', component: TeamDataComponent},
  { path: 'laptop', component: LaptopComponent},
  
]},
  {path:'',  redirectTo: '/login', pathMatch:'full'},
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);