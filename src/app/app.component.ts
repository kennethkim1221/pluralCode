import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  //the router-outlet is the place where Angular wil display the template/page after being re-routed
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Product Management';
  
}
