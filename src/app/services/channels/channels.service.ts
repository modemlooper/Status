import { Injectable } from '@angular/core';

@Injectable()
export class ChannelsService {

    items:Array<any>;

    constructor() {

      this.items = [
        { title: 'Death Star',
          count: '234',
        },
        { title: 'Rebel Alliance',
          count: '454',
        },
        { title: 'Cantina',
          count: '89',
        },
      ];

    }

    getItems() {
      return this.items;
    }

}
