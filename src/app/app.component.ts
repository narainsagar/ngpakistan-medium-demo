import { Component } from '@angular/core';
import { FeedService } from './shared/services/feed/feed.service';
import { LoggerService } from './shared/services/logger/logger.service';
import { UtilService } from './shared/services/util/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private logger: LoggerService,
    private feedService: FeedService,
    private util: UtilService
  ) {}

}
