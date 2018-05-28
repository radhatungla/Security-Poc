import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class VpnDataService {
  private subject = new Subject<any>();
  private subject1 = new Subject<any>();
  private subject2 = new Subject<any>();
  private subject3 = new Subject<any>();
  private subject4 = new Subject<any>();
  private subject5 = new Subject<any>();
  private subject6 = new Subject<any>();
  private subject7 = new Subject<any>();
  private subject8 = new Subject<any>();
  private subject9 = new Subject<any>();
  private subject10 = new Subject<any>();
  private subject11 = new Subject<any>();
  private subject12 = new Subject<any>();
  setHeading(message:boolean) {
    this.subject12.next({ text: message });
  }
  getHeading(): Observable<any> {
    return this.subject12.asObservable();
}
  sendDtaForHour(message: string) {
      this.subject.next({ text: message });
  }
  getDtaForHour(): Observable<any> {
    return this.subject.asObservable();
}
  sendDtaForDate(message: string) {
    this.subject1.next({ text: message });
}
getDtaForDate(): Observable<any> {
  return this.subject1.asObservable();
}
sendDtaForWeek(message: string) {
  this.subject2.next({ text: message });
}
getDtaForWeek(): Observable<any> {
  return this.subject2.asObservable();
}
sendproDtaForHour(message: string) {
  this.subject3.next({ text: message });
}

getproDtaForHour(): Observable<any> {
  return this.subject3.asObservable();
}
sendproDtaForDate(message: string) {
  this.subject4.next({ text: message });
}
getproDtaForDate(): Observable<any> {
  return this.subject4.asObservable();
}
sendproDtaForWeek(message: string) {
  this.subject5.next({ text: message });
}
getproDtaForWeek(): Observable<any> {
  return this.subject5.asObservable();
}
sendVpnDtaForHour(message: string) {
  this.subject6.next({ text: message });
}
getVpnDtaForHour(): Observable<any> {
  return this.subject6.asObservable();
}
sendVpnDtaForWeek(message: string) {
  this.subject7.next({ text: message });
}
getVpnDtaForWeek(): Observable<any> {
  return this.subject7.asObservable();
}
getVpnDtaForDate(): Observable<any> {
  return this.subject8.asObservable();
}
sendVpnDtaForDate(message: string) {
  this.subject8.next({ text: message });
}

  

sendproVpnDtaForHour(message: string) {
  this.subject9.next({ text: message });
}
getproVpnDtaForhour(): Observable<any> {
  return this.subject9.asObservable();
}
sendproVpnDtaForDate(message: string) {
  this.subject10.next({ text: message });
}
getproVpnDtaForDate(): Observable<any> {
  return this.subject10.asObservable();
}
sendproVpnDtaForWeek(message: string) {
  this.subject11.next({ text: message });
}


getproVpnDtaForWeek(): Observable<any> {
  return this.subject11.asObservable();
}



  clearMessage() {
      this.subject.next();
  }
  

  



  constructor(private http: Http) {this.http = http; }

  getVpnDataByHour (): Observable<any> {
    
    return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
    .map(response => response.json());
}

  getVpnDataByDay (): Observable<any> {
    
    return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
    .map(response => response.json());
}

getVpnDataByWeek (): Observable<any> {
    
  return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
  .map(response => response.json());
}

userProfile () : Observable<any> {
    
  return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
  .map(response => response.json());
}

getBadgeData() : Observable<any> {
    
  return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
  .map(response => response.json());
}

getBadgeUserDayData() : Observable<any> {
    
  return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
  .map(response => response.json());
}

getManagesyData() : Observable<any> {
    
  return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
  .map(response => response.json());
}

getLaptopData() : Observable<any> {
    
  return this.http.get("http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard")
  .map(response => response.json());
}

getglobalJsonData (): Observable<any> {
  return this.http.get('http://awsnlsec001.amwaternp.net:18529/cloudseer/dashboard')
  .map(response => response.json());
}
getElasticSearchData(value) : Observable<any> {
    
  return this.http.get('http://awsnlsec001.amwaternp.net:19200/_search?q='+value+'&size=50')
  .map( response => {response.json();
  });
}
searchResult (value): Observable<any> {
  return this.http.get('http://awsnlsec001.amwaternp.net:18529/cloudseer/peoples/'+value)
  .map(response => response.json());
}
heatMapCall (): Observable<any> {
  return this.http.get('http://awsnlsec001.amwaternp.net:18529/cloudseer/badge_reader_event_trans')
  .map(response => response.json());
}
getJsonData (value): Observable<any> {
  return this.http.get('http://awsnlsec001.amwaternp.net:19200/_search?q='+value+'&size=50&index=awsecurity_search_users')
  .map(response => response.json());
}
getPieData (): Observable<any> {
  return this.http.get('http://awsnlsec001.amwaternp.net/cloudseer/lenel_statuses')
  .map(response => response.json());
}

 
}
