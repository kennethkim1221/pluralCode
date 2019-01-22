import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  //selector: 'pm-product-detail', // since we wont nest this component. We wont need the selector
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  // ActivatedRoute vs Router
  // Router uses route with code. 
  // import the Router service
  // use event binding like (click) to an element like a button to call the method in the TS file
  // ex.  this.<Router_var>.navigate(['/products']); <-- link param array
  //
  // ActivatedRoute uses routerLink directive in a template 
  // import the ActivatedRoute service
  // ex [routerLink]="['/products', product.productId] this path then will be processed by the 
  // RouterModule.forRoot in the app.module.ts
  // Use this if you need to pass a parameter
  // to get a single url parameter, use: this.<ActivatedRoute_var]>.snapshot.paramMap.get('<param-name>');
  // the <param-name> should have the same name as declared in the route definition in app.module.ts
  // ex. { path: 'products/:id', component: etc }
  // use [routerLnk] to route from HTML with a parameter
  // ex. <a [routerLink]="['/products', product.productId]"> etc </a>

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // '+' is a JS shortcut to covert the param string to a numeric ID
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product =  {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
