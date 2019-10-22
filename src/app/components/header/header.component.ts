import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(public data: DataService, private router: Router) {}

  ngOnInit() {}

  buscarProducto(term: string) {
    if (term.length < 1) {
      return;
    }
    this.router.navigate(["/search", term]);
  }
}
