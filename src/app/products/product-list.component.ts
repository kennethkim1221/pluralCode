import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
   
     // Interpolation
    pageTitle: string = 'Product List'
    dexter: string = 'Dex'

    // Property binding
    imageWidth: number = 50;
    imageMargin: number = 2;

    // Interpolation
    showImage: boolean = false;

    //for error message
    errorMessage: string;

    // Two-way biding
    //listFilter: string = 'cart'; // this will be updated to getter and setter methods

    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    // deleted list. We will get the product list from the service (see ngOnInit)
    products: IProduct[];

      // Is executed when the function is 1st initialized
      // Best place to declared default values

      // For Service, we inject (dependency injection) the ProductService service here in the constructor. 
      // the variable productService of datatype ProductService can now be used (see ngOnInit)

      constructor(private productService: ProductService){     
      }

      onRatingClicked(message: string): void {
          console.log(`The message was: message`);
          this.pageTitle = 'Product List: ' + message;
      }


      performFilter(filterBy: string): IProduct[] {
          filterBy = filterBy.toLocaleLowerCase();
          // what is filter?! <-- array filter method (built-in) for arrays - https://www.w3schools.com/jsref/jsref_filter.asp
          // ii-isa hin lahat ng products. Then yung product name ng bawat isa ni lowercase
          // then tinignan ung result nun kung nandun ba sa filterBy (indexOf). -1 means wala
          // example, type in filter "Cart"
          // enter performFilter() method
          // Cart -> cart dahil sa filterBy.toLocaleLowerCase()
          // this.products.filter means pinasa mo ung buong list ng products sa method na filter (see w3schools)
          // para xang reduce (remember?) bawat isa i-loloop then ilolower case tpos icocompare kay "cart" (filterBy)
          // so una kanwari sa list is Hammer (product.productName)
          // Hammer -> hammer -> hammer.indexOf(cart)
          // Cart -> cart -> cart.indexOf(cart) eto lang ung kasama sa i-rereturn na array (filtered) kasi xa lang ung !== -1 
          // meaning xa lang ung nag true sa condition na yun. Siya lang ung makakasama sa filtered array

          return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      // Event binding
      toggleImage(): void {
          this.showImage = !this.showImage;
      }

      // imported from import { Component, OnInit } from "@angular/core"; at the top
      // This class -> implements OnInit 
      ngOnInit(): void {
        console.log("ngOnInit!");
        
        // The subscribe has 3 method. 1 - if success, 2 - if failed, 3 - what to do after
        this.productService.getProducts().subscribe(
            // 1 - if success 
            products => {
                this.products = products,
                this.filteredProducts = this.products;
            }, 
            // 2 - if error. Catches the error from throwError(errorMessage);
            error => this.errorMessage = <any>error //casting the error returend from the observable to any datatype     
        )       
    }
}