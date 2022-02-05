import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = `${environment.url}/upload`;

  constructor(private _http: HttpClient) { }

  SendApiFile(body: FormData): Observable<any>{
    return this._http.post(this.url, body)
  }
}
