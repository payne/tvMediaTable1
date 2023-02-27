import {Component, OnInit} from '@angular/core';
import {TvListingsService} from "../tv-listings.service";

@Component({
  selector: 'app-tv-grid1',
  templateUrl: './tv-grid1.component.html',
  styleUrls: ['./tv-grid1.component.scss']
})
export class TvGrid1Component implements  OnInit {


 constructor(private tvListings: TvListingsService) {
 }

ngOnInit(): void {
  this.tvListings.getListingsGrid("junk").subscribe((data) => {
    console.log(data);
  });
}


}
