import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Info } from "../interfaces/info.interface";

@Injectable({
  providedIn: "root"
})
export class DataService {
  info: Info = {};
  loaded = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.loadData();
    this.loadTeam();
  }

  private loadData() {
    // Read JSON file
    this.http.get("assets/data/data-pagina.json").subscribe((resp: Info) => {
      this.loaded = true;
      this.info = resp;
    });
  }

  private loadTeam() {
    this.http
      .get("https://angular-html-f9bea.firebaseio.com/equipo.json")
      .subscribe((resp: any[]) => {
        this.equipo = resp;
      });
  }
}
