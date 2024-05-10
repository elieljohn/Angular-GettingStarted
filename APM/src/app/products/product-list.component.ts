import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List'
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    // Call 'getProducts()' and subscribes to the resulting observable
    this.sub = this.productService.getProducts().subscribe({
      // Assign the emitted 'products' to 'this.products' and 'this.filteredProducts'
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err // Assigns the error message to 'this.errorMessage' if an error occurs
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe(); // Terminate the subscription when the component is destroyed
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
