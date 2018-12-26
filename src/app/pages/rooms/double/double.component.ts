import { Component } from '@angular/core';

@Component({
  selector: 'ngx-double',
  styleUrls: ['./double.component.scss'],
  templateUrl: './double.component.html',
})
export class DoubleComponent {

  rooms: any[] = [{
    title: 'Room #1',
    source: 'assets/images/alan.png',
  }, {
    title: 'Room #2',
    source: 'assets/images/eva.png',
  }, {
    title: 'Room #3',
    source: 'assets/images/jack.png',
  }, {
    title: 'Room #4',
    source: 'assets/images/kate.png',
  }];

  selectedRoom: any = this.rooms[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectRoom(room: any) {
    this.selectedRoom = room;
    this.isSingleView = true;
  }
}
