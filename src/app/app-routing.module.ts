import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableSortingExample } from './page1/table-sorting-example';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { CartServiceComponent } from './cart-view/cart-service.component'

const routes: Routes = [
  { path: 'page1', component: TableSortingExample},
  { path: 'page2', component: Page2Component},
  { path: 'page3',component: Page3Component},
  { path: 'cart-view', component: CartServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableSortingExample, Page2Component, Page3Component, CartServiceComponent]
