import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostCode } from "../model/PostCodeModel";
import { Api } from "../config/config"

@Injectable({
  providedIn: 'root'
})
export class CheckPostCodeService {

  constructor(private http: HttpClient) { }

  checkPost(id: string) {
    return this.http.get<PostCode>(Api.url + 'postcode/' + id);
  }
}