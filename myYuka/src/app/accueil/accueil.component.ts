import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public titre : string;
  public message : string;

  constructor() {
    this.titre = "MY YUKA";
    this.message = "Obtenez les informations sur les produits alimentaires"
  }

  ngOnInit(): void {
  }

}
