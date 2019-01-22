import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // Our derectives, components, and pipes are declared here
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // Derectives, components, and pipes from other sources like from Angular or 3rd parties, are declared here
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    //use the forRoot([]) method to tell the router module
     ProductModule,
     AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
