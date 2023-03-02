import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {TvListingsService} from "../tv-listings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent implements  OnInit {
  // a reactive form with fields for api key, start time, and end time, and date, with a submit button
  // store all of this information in a service
  // the service will make the information available to the other components

  apiKey = new FormControl('');
  startTime = new FormControl('2023-03-01T24:00:00');

  apiKeyForm = new FormGroup({
    apiKey: this.apiKey,
    startTime: this.startTime,
    endTime: new FormControl(''),
    broadcastDate: new FormControl('')
  });


  constructor(private tvListings: TvListingsService, private router: Router) { }

  onSubmit() {
    const formData = this.apiKeyForm.value;
    const formStartDate = formData['startTime'] as string;
    const d = new Date(formStartDate);
    d.setDate(d.getDate()+1)
    localStorage.setItem('startTime', d.toISOString());
    this.tvListings.setParameters(formData);
    localStorage.setItem('apiKey', formData['apiKey'] as string);
    this.router.navigate(['list']);
  }

  ngOnInit(): void {
    const locallyStoredApiKey = localStorage.getItem('apiKey');
    let locallyStoredStartTime = localStorage.getItem('startTime');
    locallyStoredStartTime = locallyStoredStartTime ? locallyStoredStartTime : '2023-03-01T24:00:00';
    this.apiKey.setValue(locallyStoredApiKey);
    this.startTime.setValue(locallyStoredStartTime);
  }

}
