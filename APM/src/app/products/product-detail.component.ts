import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor(private route: ActivatedRoute) { }  // Provide access to the 'id' parameter passed in the URL

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  // Retrieve 'id' parameter from the URL and store it to the 'id' constant
    this.pageTitle += `: ${id}`;  // Append 'id' to the 'pageTitle' string
  }

}
