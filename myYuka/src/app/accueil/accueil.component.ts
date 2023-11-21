import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {



  public titre: string = "MY YUKA";
  public message: string = "Obtenez les informations sur les produits alimentaires";

  champSaisi = new FormControl('');

  public nomProduit: string = '';
  public informations: string = '';
  public ingredients: string = '';
  public alergenes: string = '';
  public nova: string = '';
  public nutriscore: string = '';
  public huileDePalm: string = '';
  public distributeur: string = '';
  public imageProduit: string = '';
  public imageIngredient: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public chercherChampSaisi() {
    if (this.champSaisi.value) {
      const url = `https://world.openfoodfacts.org/api/v0/product/${this.champSaisi.value}.json`;

      this.http.get<any>(url).subscribe(
        data => {
          const product = data.product;
          if (product) {
            this.nomProduit = product.generic_name || 'Non disponible';
            this.informations = product.product_name || 'Non disponible';
            this.ingredients = product.ingredients_text || 'Non disponible';
            this.alergenes = product.allergens_from_ingredients || 'Non disponible';
            this.nova = product.nova_group || 'Non disponible';
            this.nutriscore = product.nutrition_grade_fr|| 'Non disponible';
            this.huileDePalm = product.ingredients_from_palm_oil || 'Sans huile de Palm';
            this.distributeur = product.brands || 'Non disponible';
            this.imageProduit = product.image_url || 'Non disponible';
            this.imageIngredient = product.image_nutrition_url;
          } else {
            alert('Produit non trouvé.');
          }
        },
        error => {
          console.error('Erreur lors de la requête:', error);
          alert('Une erreur est survenue lors de la requête.');
        }
      );
    } else {
      alert('Veuillez entrer un code barre.');
    }
  }
}
