import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort, Sort} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule }   from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CartServiceComponent } from './cart-view/cart-service.component';
import { MatBadgeModule } from "@angular/material/badge";


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CartServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
