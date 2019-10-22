import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/services/products.service";
import { CompleteProduct } from "../../interfaces/completeProduct.interface";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  product: CompleteProduct;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productsService
        .getProduct(params["id"])
        .subscribe((product: CompleteProduct) => {
          this.id = params["id"];
          this.product = product;
        });
    });
  }
}
