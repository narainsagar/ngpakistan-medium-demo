import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../../shared/services/logger/logger.service';
import { FeedService } from '../../shared/services/feed/feed.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

  fetch(value: string) {
    this.search.emit(value);
  }

}
