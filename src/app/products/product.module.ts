import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';

import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConverToSpacesPipe
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
