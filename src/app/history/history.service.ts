import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recent } from "../model/HistoryCodeModel";
import { Api } from "../config/config"

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  checkHistory() {
    return this.http.get<Recent>(Api.url + 'postcode');
  }
}
