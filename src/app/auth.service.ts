import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as base64 from 'base-64';
import * as utf8 from 'utf8';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = 'https://pm.agilecyber.co.uk'; // Replace with your API URL
  constructor(private http: HttpClient,private cookieService: CookieService) {}
  private apiUrl = 'your-api-url';


 


  // private messageSource = new BehaviorSubject<string>(''); // Initial value is an empty string
  // currentMessage = this.messageSource.asObservable();
  getSurveyData(): Observable<any> {
    const url = `${this.apiUrl}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(url,{headers});
  }

}
