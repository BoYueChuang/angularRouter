import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../@models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {
  private url = '/api/group';

  constructor(private http: HttpClient) { }

  εεΎθ³ζ() {
    return this.http.get<Group[]>(this.url);
  }

}
