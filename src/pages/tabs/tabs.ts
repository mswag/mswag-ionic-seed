import { Component } from '@angular/core';

import { AboutPageComponent } from '../about/about';
import { ContactPageComponent } from '../contact/contact';
import { HomePageComponent } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPageComponent {
  tab1Root = HomePageComponent;
  tab2Root = AboutPageComponent;
  tab3Root = ContactPageComponent;

  constructor() {}
}
