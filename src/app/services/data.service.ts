import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Info } from "../interfaces/info.interface";

@Injectable({
  providedIn: "root"
})
export class DataService {
  info: Info = {};
  loaded = false;

  constructor(private http: HttpClient) {
    // Read JSON file
    this.http.get("assets/data/data-pagina.json").subscribe((resp: Info) => {
      this.loaded = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
