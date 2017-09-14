import { Component } from '@angular/core';
import { FeedService } from './shared/feed/feed.service';
import { LoggerService } from './shared/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  feed: any = null;
  items: any[] = [];
  errorMessage = '';

  constructor(private logger: LoggerService, private feedService: FeedService) {}

  searchProfiles(name: string) {
    this.errorMessage = '';
    this.feedService.get(name).subscribe(data => {
      this.logger.log(`response:` + data);
      if (data['status'] === 'error') {
        this.errorMessage = data['message'];
        return;
      }
      this.feed = data['feed'];
      this.items = data['items'];
    });
  }

}
