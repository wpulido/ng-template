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
    return new Promise((resolve, reject) => {
      this.http
        .get("https://angular-html-f9bea.firebaseio.com/productos_idx.json")
        .subscribe((resp: Product[]) => {
          this.products = resp;
          this.loading = false;
          resolve();
        });
    });
  }

  getProduct(id: string) {
    return this.http.get(
      `https://angular-html-f9bea.firebaseio.com/productos/${id}.json`
    );
  }

  searchProduct(term: string) {
    if (this.products.length === 0) {
      this.loadProducts().then(() => {
        this.filterProducts(term);
      });
    } else {
      this.filterProducts(term);
    }

    // this.productsFilter = this.products.filter(product => {
    //   return true;
    // });
  }

  filterProducts(term: string) {
    this.productsFilter = [];
    term = term.toLowerCase();
    this.products.forEach(product => {
      const lowerTitle = product.titulo.toLowerCase();
      if (
        product.categoria.indexOf(term) >= 0 ||
        lowerTitle.indexOf(term) >= 0
      ) {
        this.productsFilter.push(product);
      }
    });
  }
}
