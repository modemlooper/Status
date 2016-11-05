import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChannelsService } from '../services/channels/channels.service';
import { MessagesService } from '../services/messages/messages.service';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: '[appsidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ChannelsService, MessagesService]
})
export class SidebarComponent implements OnInit {

    items:Array<any>;
    @Output() channelChange = new EventEmitter<any>();

    enter( st: HTMLInputElement ) {
        console.log(st.value);
        st.value = null;
    }

    constructor( channelsService: ChannelsService, messagesService: MessagesService ) {
        this.items = channelsService.getItems();
    }

    selectNav(nav) {
        this.items.forEach( (nav) => {
          nav.active = false;
        });
        nav.active = true;

        this.channelChange.emit(nav.id);
    }


    ngOnInit() {
    }

}
