import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getTopics(page = 1,  tab = 'all', limit = 40, mdrender = true): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        'page': `${page}`,
        'tab': tab,
        'limit': `${limit}`,
        'mdrender': `${mdrender}`
      }
    });
    return this.http.get('https://cnodejs.org/api/v1/topics', {
      params: params
    });
  }
}
