import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    public product: ProductsService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.product.searchProduct(params["term"]);
    });
  }
}
