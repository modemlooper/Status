import { Injectable } from '@angular/core';

@Injectable()
export class ChannelsService {

    items:Array<any>;

    constructor() {

      this.items = [
        {
          id: 'death-star',
          title: 'Death Star',
          count: '234',
        },
        {
          id: 'rebel-alliance',
          title: 'Rebel Alliance',
          count: '454',
        },
        {
          id: 'cantina',
          title: 'Cantina',
          count: '89',
        },
      ];

    }

    getItems() {
      return this.items;
    }

}
