import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  items:Array<any>;

  constructor() {

    this.items = [
      { name: 'E. Palpatine',
        avatar: 'https://avatars.io/twitter/lordpalpatin',
        time: '8 min ago',
        message: 'It\'s not the lava, loss of limbs or electrocution that kills you, it\'s your douchebag son who removes your breathing apparatus.'
      },
      { name: 'Dath V.',
        avatar: 'https://avatars.io/twitter/darthvader',
        time: '4 min ago',
        message: 'Lando: But we love our headphone jacks!<br>Apple Vader: We have altered the deal. Pray we don\'t alter it any further.'
      },
      { name: 'TK-421',
        avatar: 'https://avatars.io/twitter/troopertk421',
        time: '3 min ago',
        message: 'Chew-Bach-A<br><img src="https://pbs.twimg.com/media/Cs0kxL9UsAECh68.jpg" width="300px">'
      },
    ];

  }

    getItems() {
      return this.items;
    }

}
