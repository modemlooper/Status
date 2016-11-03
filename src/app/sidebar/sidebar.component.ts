import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../services/channels/channels.service';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ChannelsService]
})
export class SidebarComponent implements OnInit {

    items:Array<any>;

    enter( st: HTMLInputElement ) {
        console.log(st.value);
        st.value = null;
    }

    constructor( channelsService: ChannelsService ) {
      this.items = channelsService.getItems();
    }

    selectNav(nav) {
        this.items.forEach( (nav) => {
          nav.active = false;
        });
        nav.active = true;
    }

    ngOnInit() {
    }

}
