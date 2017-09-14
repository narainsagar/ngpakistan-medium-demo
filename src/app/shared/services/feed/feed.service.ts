import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class FeedService {

  baseUri = `https://api.rss2json.com/v1/api.json?api_key=${environment.rss2jsonApiKey}&rss_url=https://medium.com/feed/`;

  constructor(private http: HttpClient) { }

  get(username: string) {
    return this.http.get(this.baseUri + username);
  }

}
