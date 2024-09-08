import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../components/footer/footer.component";
import {ApiService} from "../services/api.service";
import {RouterLink} from "@angular/router";
import {appPages} from "../services/reference";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, FooterComponent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonRouterLink, RouterLink, IonButton, ToolbarComponent]
})
export class HomePage implements OnInit {
  private apiService = inject(ApiService);
  posts = this.apiService.posts
  constructor() {

  }

  ngOnInit() {
  }

  protected readonly appPages = appPages;
}
