import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HikeRepoService {
  private _urlApi = `${environment.api_url}/hike`;

  constructor(private http: HttpClient) {}
}
