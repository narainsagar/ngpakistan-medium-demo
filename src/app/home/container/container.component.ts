import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../../shared/services/feed/feed.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() feed: any = null;

  sortBy = 'asc';

  constructor() { }

  ngOnInit() {
  }

}
