import {Component, inject, OnInit} from '@angular/core';
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
  IonMenuButton,
  IonNav,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../components/footer/footer.component";
import {ApiService} from "../services/api.service";
import {RouterLink} from "@angular/router";
import {appPages} from "../services/reference";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonNav, FooterComponent, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonMenuButton, IonRow, RouterLink, IonButton, IonRouterLink, ToolbarComponent]
})
export class PostsPage implements OnInit {
  private apiService = inject(ApiService);
  posts = this.apiService.posts

  constructor() {
  }

  ngOnInit() {
  }

  protected readonly appPages = appPages;
}
