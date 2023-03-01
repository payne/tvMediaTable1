import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {TvListingsService} from "../tv-listings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent {
  // a reactive form with fields for api key, start time, and end time, and date, with a submit button
  // store all of this information in a service
  // the service will make the information available to the other components


  apiKeyForm = new FormGroup({
    apiKey: new FormControl(''),
    startTime: new FormControl('2023-03-01T24:00:00'),
    endTime: new FormControl(''),
    broadcastDate: new FormControl('')
  });


  constructor(private tvListings: TvListingsService, private router: Router) { }

  onSubmit() {
    this.tvListings.setParameters(this.apiKeyForm.value);
    this.router.navigate(['/']);
  }

}
