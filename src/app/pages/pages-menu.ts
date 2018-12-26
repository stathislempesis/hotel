import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Rooms',
    icon: 'nb-list',
    children: [
      {
        title: 'Single Room',
        link: '/pages/rooms/single',
      },
      {
        title: 'Double Room',
        link: '/pages/rooms/double',
      },
    ],
  },
  {
    title: 'Location',
    icon: 'nb-location',
    link: '/pages/location',
  },
];
