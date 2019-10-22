import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../interfaces/product.interface";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  products: Product[] = [];
  loading = true;
  productsFilter: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.http
      .get("https://angular-html-f9bea.firebaseio.com/productos_idx.json")
      .subscribe((resp: Product[]) => {
        this.products = resp;
        this.loading = false;
      });
  }

  getProduct(id: string) {
    return this.http.get(
      `https://angular-html-f9bea.firebaseio.com/productos/${id}.json`
    );
  }

  searchProduct(term: string) {
    this.productsFilter = this.products.filter(product => {
      return true;
    });

    console.log(this.productsFilter);
  }
}
