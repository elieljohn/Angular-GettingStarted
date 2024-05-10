import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root' // Register a service in the Root Application
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  // Makes an HTTP GET request to 'api/products/products.json'
  // Returns the result as an Observable of type IProduct[]
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
  }
}
