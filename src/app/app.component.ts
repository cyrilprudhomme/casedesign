import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterLink,
  IonRouterOutlet,
  IonSplitPane,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {
  albumsOutline,
  albumsSharp,
  helpOutline,
  helpSharp,
  homeOutline,
  homeSharp,
  logoInstagram,
  mailOpenOutline,
  mailOpenSharp,
  pricetagsOutline,
  pricetagsSharp
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonToolbar],
})
export class AppComponent {
  public appPages = [
    {title: 'Accueil', url: '/home', icon: 'home'},
    {title: 'Posts', url: '/posts', icon: 'albums'},
    {title: 'Qui suis-je ?', url: '/me', icon: 'help'},
    {title: 'Mes offres', url: '/offers', icon: 'pricetags'},
    {title: 'Contact', url: '/contact', icon: 'mail-open'},
  ];
  public labels = [{title: 'Instagram', icon: 'logo-instagram'}];

  constructor() {
    addIcons({
      logoInstagram,
      homeOutline,
      homeSharp,
      helpOutline,
      helpSharp,
      pricetagsOutline,
      pricetagsSharp,
      albumsOutline,
      albumsSharp,
      mailOpenOutline,
      mailOpenSharp
    });
  }
}
