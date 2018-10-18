import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getTopics(page: number, tab = 'all', limit: number, mdrender = true): Observable<any> {
    /**
     const params = new HttpParams({
      fromObject: {
        'page': `${page}`,
        'tab': tab,
        'limit': `${limit}`,
        'mdrender': `${mdrender}`
      }
    });
     写法一 需要引入 HttpParams
     **/
    return this.http.get('https://cnodejs.org/api/v1/topics', {
      params: {
        'page': `${page}`,
        'tab': tab,
        'limit': `${limit}`,
        'mdrender': `${mdrender}`
      } // 写法二
    });
  }
}
