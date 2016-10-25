import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    addMessage( st: HTMLInputElement ) {
        console.log(st.value);
        st.value = null;
    }

  constructor() { }

  ngOnInit() {
  }

}
