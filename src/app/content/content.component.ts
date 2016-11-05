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

    @Input() com1ref;

    addMessage( st: HTMLInputElement ) {
        console.log(st.value);
        st.value = null;
    }

  constructor( messagesService: MessagesService, private dataService: DataService ) {
      this.items = messagesService.getItems();
  }

  updateItems() {
      this.items.push(
          { name: 'E. Palpatine',
            avatar: 'https://avatars.io/twitter/lordpalpatin',
            time: '8 min ago',
            message: 'It\'s not the lava, loss of limbs or electrocution that kills you, it\'s your douchebag son who removes your breathing apparatus.'
          }
      );
  }

  ngOnInit() {
  }

}
