import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type: string; // valid: 'error' | 'info' | 'success' | 'warning'
  @Input() title?: string; // title / header for alert
  @Input() message: string; // message / description for alert

  constructor() { }

  ngOnInit() {
  }

}
