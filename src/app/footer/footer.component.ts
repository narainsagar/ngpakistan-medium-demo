import { Component, OnInit } from '@angular/core';
import { MySocialProfiles } from './social_profiles';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialProfiles: Object[] = MySocialProfiles;

  constructor() { }

  ngOnInit() {
  }

}
