import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { VpnDataComponent } from './vpn/vpn-data/vpn-data.component';
import { BadgeDataComponent } from './badge/badge-data/badge-data.component';
import { VpnWeekdayComponent } from './vpn/vpn-weekday/vpn-weekday.component';
import { VpnDataService } from './services/vpn-data.service';
import { ElasticSearchServicesService } from './services/elastic-search-services.service';
import { HttpModule } from '@angular/http';
import { VpnHoursDataComponent } from './vpn/vpn-hours-data/vpn-hours-data.component';
import { VpnDayDataComponent } from './vpn/vpn-day-data/vpn-day-data.component';
import { BadgeDayDataComponent } from './badge/badge-day-data/badge-day-data.component';
import { BadgeHourDataComponent } from './badge/badge-hour-data/badge-hour-data.component';
import { BadgeWeekDataComponent } from './badge/badge-week-data/badge-week-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TeamDataComponent } from './team/team-data/team-data.component';
import { LaptopComponent } from './laptop/laptop.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ProbabilityGraphComponent } from './probability-graph/probability-graph.component';
import { HoursdataComponent } from './probability-graph/hoursdata/hoursdata.component';
import { DaydataComponent } from './probability-graph/daydata/daydata.component';
import { WeekdataComponent } from './probability-graph/weekdata/weekdata.component';
import { GlobalBadgedataComponent } from './global-badgedata/global-badgedata.component';
import { HourDataComponent } from './global-badgedata/hour-data/hour-data.component';
import { DayDataComponent } from './global-badgedata/day-data/day-data.component';
import { WeekDataComponent } from './global-badgedata/week-data/week-data.component';
import { GlobalBadgeprobabilityDataComponent } from './global-badgeprobability-data/global-badgeprobability-data.component';
import { ProhourDataComponent } from './global-badgeprobability-data/prohour-data/prohour-data.component';
import { BadgeheatmapComponent } from './badgeheatmap/badgeheatmap.component';
import { VpnheatmapComponent } from './vpnheatmap/vpnheatmap.component';
import { ProdaydataComponent } from './global-badgeprobability-data/prodaydata/prodaydata.component'
import { ProweekdataComponent } from './global-badgeprobability-data/proweekdata/proweekdata.component';
import { BadgePieChartComponent } from './badge-pie-chart/badge-pie-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    VpnDataComponent,
    BadgeDataComponent,
    VpnWeekdayComponent,
    VpnHoursDataComponent,
    VpnDayDataComponent,
    BadgeDayDataComponent,
    BadgeHourDataComponent,
    BadgeWeekDataComponent,
    UserProfileComponent,
    TeamDataComponent,
    LaptopComponent,
    HeatMapComponent,
    MainComponentComponent,
    DashbordComponent,
    AlertsComponent,
    SearchResultComponent,
    ProbabilityGraphComponent,
    HoursdataComponent,
    DaydataComponent,
    WeekdataComponent,
    GlobalBadgedataComponent,
    HourDataComponent,
    DayDataComponent,
    WeekDataComponent,
    GlobalBadgeprobabilityDataComponent,
    ProhourDataComponent,
    BadgeheatmapComponent,
    VpnheatmapComponent,
    ProdaydataComponent,ProweekdataComponent, BadgePieChartComponent
  ],
  imports: [
    BrowserModule,
    routing, FormsModule,HttpModule
  ],
  providers: [AuthenticationService, VpnDataService,ElasticSearchServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
