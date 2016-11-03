import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';

@Component({
  selector: '[app-content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [MessagesService]
})
export class ContentComponent implements OnInit {

    items:Array<any>;

    addMessage( st: HTMLInputElement ) {
        console.log(st.value);
        st.value = null;
    }

  constructor( messagesService: MessagesService ) {
      this.items = messagesService.getItems();
  }

  ngOnInit() {
  }

}
