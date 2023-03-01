import {Component, OnInit} from '@angular/core';
import {TvListingsService} from "../tv-listings.service";

@Component({
  selector: 'app-tv-grid1',
  templateUrl: './tv-grid1.component.html',
  styleUrls: ['./tv-grid1.component.scss']
})
export class TvGrid1Component implements OnInit {
  tvData: any;
  channels: any;

  constructor(private tvListings: TvListingsService) {
  }

  toOmahaTime(dateString: string) {
    const d = new Date(dateString);
    d.setHours(d.getHours() - 6);
    return d;
  }

  toLocalTime(d: Date) {
    return d.toLocaleTimeString();
  }

  ngOnInit(): void {
    this.tvListings.getListingsGridOLD("junk").subscribe((data) => {
      console.log(data);
      this.tvData = data;
      this.channels = [];
      for (const n in data) {
        // @ts-ignore
        const d = data[n];
        const pair = {
          'channel': d['channel'],
          'listings': d['listings']
        };
        // @ts-ignore
        this.channels.push(pair);
      }
    });
  }


}
