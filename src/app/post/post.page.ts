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
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivatedRoute} from "@angular/router";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../api.service";
import {albums} from "ionicons/icons";

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, NgbCarousel, NgbSlide, IonBackButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonInput, IonItem, IonList, IonRow, IonText]
})
export class PostPage implements OnInit {
  public folder!: string;
  protected readonly albums = albums;
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
