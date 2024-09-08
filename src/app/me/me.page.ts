import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../components/footer/footer.component";
import {RouterLink} from "@angular/router";
import {appPages} from "../services/reference";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FooterComponent, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonMenuButton, IonRow, IonText, IonImg, IonButton, IonRouterLink, RouterLink, ToolbarComponent]
})
export class MePage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  protected readonly appPages = appPages;
}
