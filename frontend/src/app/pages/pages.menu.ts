export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'clients',
        data: {
          menu: {
            title: 'Clients',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 50
          }
        }
      },
      {
        path: 'mobiles',
        data: {
          menu: {
            title: 'Mobiles',
            icon: 'ion-ios-cart-outline',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
      },
      {
        path: 'managers',
        data: {
          menu: {
            title: 'Managers',
            icon: 'ion-person',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Phone',
            url: 'http://phone.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }

];
