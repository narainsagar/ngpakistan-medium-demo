import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FeedService } from '../shared/feed/feed.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() feed: any = null;

  constructor() { }

  ngOnInit() {
  }

}
