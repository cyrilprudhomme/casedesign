import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonMenuButton,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../services/api.service";
import {albums} from "ionicons/icons";
import {appPages} from "../services/reference";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, NgbCarousel, NgbSlide, IonBackButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonInput, IonItem, IonList, IonRow, IonText, IonRouterLink, RouterLink, ToolbarComponent]
})
export class PostPage implements OnInit {
  public folder!: string;
  protected readonly albums = albums;
  protected readonly appPages = appPages;
  private activatedRoute = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  post = this.apiService.post

  constructor() {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.apiService.getPost(this.folder)
  }
}
