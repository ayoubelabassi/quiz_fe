import {Inject, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {NgxAlertsService} from '../shared/alert/ngx-alerts';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService<T> {
  // private options: RequestOptions;
  private header: HttpHeaders;
  private API_URL: string = 'http://51.38.188.19:3001/';
  private JWT_TOKEN: string;
  private JWT_TOKEN_KEY: string = 'JWT_TOKEN';
  
  constructor(private router: Router, private http: HttpClient,
        private alertService: NgxAlertsService,
        @Inject(SESSION_STORAGE) private storageService: StorageService) {
        const token: string = this.getToken();
        if (!this.tokenNotExpired(token)) {
            this.router.navigateByUrl('home');
        }
        this.header = new HttpHeaders();
        this.header.append('Authorization', 'Bearer ' + token);
    }

    tokenNotExpired(token: string): boolean {
        return token ? true : false;
    }

    getToken(): string {
        return localStorage.getItem(this.JWT_TOKEN_KEY);
    }

    get(url: string, params: any): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        return this.http.get(this.API_URL + url, {
            params: params});
    }

    post(url: string, data: any): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        return this.http.post(this.API_URL + url, data);
    }

}