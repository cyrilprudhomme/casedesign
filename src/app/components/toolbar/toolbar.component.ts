import {Component, Input, OnInit} from '@angular/core';
import {appPages} from "../../services/reference";
import {IonButton, IonButtons, IonMenuButton, IonRouterLink, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonButton,
    RouterLink,
    IonRouterLink

  ],
  standalone: true
})
export class ToolbarComponent implements OnInit {
  @Input() size = ''
  protected readonly appPages = appPages;

  constructor() {
  }

  ngOnInit() {
  }
}
