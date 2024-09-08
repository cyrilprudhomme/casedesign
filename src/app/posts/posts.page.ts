import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
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
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../footer/footer.component";
import {ApiService} from "../api.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonNav, FooterComponent, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonMenuButton, IonRow, RouterLink]
})
export class PostsPage implements OnInit {
  private apiService = inject(ApiService);
  posts = this.apiService.posts

  constructor() {
  }

  ngOnInit() {
  }

}
