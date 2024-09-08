import {Component, OnInit} from '@angular/core';
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
import {RouterLink} from "@angular/router";
import {appPages} from "../services/reference";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FooterComponent, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonMenuButton, IonRow, IonText, IonCardContent, IonButton, IonRouterLink, RouterLink, ToolbarComponent]
})
export class OffersPage implements OnInit {
  offers = [
    {
      title: "ÉQUILIBRE DÉCO",
      subtitle: "À partir de 300€",
      image_url: "https://casedesign.fr/content/images/2024/05/salonsejour2.jpeg",
      body: "Je vous propose deux heures de coaching décoration, à domicile, en café ou en Visio ,afin de vous conseiller sur mes idées, mes inspirations, les dernières tendances et les bonnes adresses de décoration."
    },
    {
      title: "CRÉATIVITÉ HABITAT",
      subtitle: "À partir de 600€",
      image_url: "https://casedesign.fr/content/images/2024/05/entr-3.jpeg",
      body: "Vous avez une pièce dont la décoration ou l'aménagement vous pose problème ?\n" +
        "On se donne un rendez vous, on échange sur le souci que vous rencontrez, je prend des mesures, je vous interroge sur vos goûts et vos envies.\n" +
        "À l'issue du rendez-vous, je vous livre un document d'analyse du projet avec un visuel 3D pour vous aider à vous projeter et une planche d'ambiance pour votre pièce à décorer avec toutes les références dont vous aurez besoin."
    },
    {
      title: "ÉLÉGANCE SUR MESURE",
      subtitle: "Sur devis",
      image_url: "https://casedesign.fr/content/images/2024/05/entr-3.jpeg",
      body: "Vous avez une pièce dont la décoration ou l'aménagement vous pose problème ?\n" +
        "On se donne un rendez vous, on échange sur le souci que vous rencontrez, je prend des mesures, je vous interroge sur vos goûts et vos envies.\n" +
        "À l'issue du rendez-vous, je vous livre un document d'analyse du projet avec un visuel 3D pour vous aider à vous projeter et une planche d'ambiance pour votre pièce à décorer avec toutes les références dont vous aurez besoin."
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  protected readonly appPages = appPages;
}
