import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConverToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { starComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  // Our derectives, components, and pipes are declared here
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    starComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  // Derectives, components, and pipes from other sources like from Angular or 3rd parties, are declared here
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //use the forRoot([]) method to tell the router module
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products/:id/:temp', redirectTo: 'welcome' },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
     ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
