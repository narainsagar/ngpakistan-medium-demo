import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FeedService } from './../shared/services/feed/feed.service';
import { LoggerService } from './../shared/services/logger/logger.service';
import { UtilService } from './../shared/services/util/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  feed: any = null;
  items: any[] = [];

  constructor(
    private logger: LoggerService,
    private feedService: FeedService,
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  searchProfiles(name: string) {
    this.util.errorMessage = '';
    this.feedService.get(name).subscribe(data => {
      this.logger.log(`response:` + data);
      if (data['status'] === 'error') {
        this.util.errorMessage = data['message'];
        return;
      }
      this.feed = data['feed'];
      this.items = data['items'];
    });
  }

}
