import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent {
  // a reactive form with fields for api key, start time, and end time, and date, with a submit button
  // store all of this information in a service
  // the service will make the information available to the other components

  apiKey: string = '';
  startTime: string = '';
  endTime: string = '';
  broadcastDate: string = '';

  apiKeyForm = new FormGroup({
    apiKey: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    broadcastDate: new FormControl('')
  });


  constructor() { }

  onSubmit() {
    console.log(this.apiKeyForm.value);
    console.log(`That ^^^ is the value of the form`);
  }

}
