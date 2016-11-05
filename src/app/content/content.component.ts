import { Component, OnInit, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DataService } from '../services/data/data.service';
import { MessagesService } from '../services/messages/messages.service';

@Component({
  selector: '[appcontent]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [MessagesService, DataService]
})
export class ContentComponent implements OnInit {

    items: Array<any>;

    addMessage( st: HTMLInputElement ) {
        console.log(st.value);
        this.updateItems( st.value );
        st.value = null;
    }

  constructor( messagesService: MessagesService, private dataService: DataService ) {
      this.items = [];
  }

  updateItems( text ) {
      this.items.push(
          { name: 'E. Palpatine',
            avatar: 'https://avatars.io/twitter/lordpalpatin',
            time: '8 min ago',
            message: text,
          }
      );
  }

 channelChange( text ) {

     this.items = [];

      this.items.push(
          { name: 'E. Palpatine',
            avatar: 'https://avatars.io/twitter/lordpalpatin',
            time: '8 min ago',
            message: text,
          }
      );
  }

  ngOnInit() {
  }

}
