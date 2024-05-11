import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;  // 'product' will be undefined until the data is retrieved from the HTTP

  constructor(private route: ActivatedRoute,  // Provide access to the 'id' parameter passed in the URL
              private router: Router) { } // Allow access to 'navigate' on 'onBack()'

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  // Retrieve 'id' parameter from the URL and store it to the 'id' constant
    this.pageTitle += `: ${id}`;  // Append 'id' to the 'pageTitle' string
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };

  }

  // Navigates back to the 'products' page
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
