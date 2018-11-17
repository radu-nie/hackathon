import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class IndicesService {
  private baseUrl: string
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:2222';
  }

  async getIndices(): Promise<any> {
    return this.http.get<any>(this.baseUrl + '/api/cats/lucy', httpOptions).toPromise<any>();
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}