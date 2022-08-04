import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from 'src/services/cart.service';
import { BehaviorSubject } from 'rxjs';


export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
  imageurl: string;
  details: string;
  price: number;
  addtocart:string;
  qty:number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, imageurl:'https://images.pexels.com/photos/2067421/pexels-photo-2067421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Hydrogen', weight: 1.0079, symbol: 'H', details:'F cheeseburger is a hamburger topped with cheese.',price: 10,addtocart:" ",qty:1},
  {position: 2, imageurl:'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Helium', weight: 4.0026, symbol: 'He', details:'I cheeseburger is a hamburger topped with cheese.',price: 50,addtocart:" ",qty:1},
  {position: 3, imageurl:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Lithium', weight: 6.941, symbol: 'Li', details:'E cheeseburger is a hamburger topped with cheese.',price: 24,addtocart:" ",qty:1},
  {position: 4, imageurl:'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Beryllium', weight: 9.0122, symbol: 'Be', details:'H cheeseburger is a hamburger topped with cheese.',price: 30,addtocart:" ",qty:1},
  {position: 5, imageurl:'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Boron', weight: 10.811, symbol: 'B', details:'K cheeseburger is a hamburger topped with cheese.',price: 45,addtocart:" ",qty:1},
  {position: 6, imageurl:'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Carbon', weight: 12.0107, symbol: 'C', details:'D cheeseburger is a hamburger topped with cheese.',price: 35,addtocart:" ",qty:1},
  {position: 7, imageurl:'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Nitrogen', weight: 14.0067, symbol: 'N', details:'J cheeseburger is a hamburger topped with cheese.',price: 52,addtocart:" ",qty:1},
  {position: 8, imageurl:'https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Oxygen', weight: 15.9994, symbol: 'O', details:'G cheeseburger is a hamburger topped with cheese.',price: 65,addtocart:" ",qty:1},
  {position: 9, imageurl:'https://material.angular.io/assets/img/examples/shiba2.jpg', name: 'Fluorine', weight: 18.9984, symbol: 'F', details:'L cheeseburger is a hamburger topped with cheese.',price: 85,addtocart:" ",qty:1},
  {position: 10, imageurl:'https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Neon', weight: 20.1797, symbol: 'Ne', details:'C cheeseburger is a hamburger topped with cheese.',price: 24,addtocart:" ",qty:1},
  {position: 11, imageurl:'https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'dummy0', weight: 22, symbol: 'du', details:'B cheeseburger is a hamburger topped with cheese.',price: 34,addtocart:" ",qty:1},
  {position: 12, imageurl:'https://images.pexels.com/photos/1998918/pexels-photo-1998918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'dummy1', weight: 23, symbol: 'du1', details:'A cheeseburger is a hamburger topped with cheese.',price: 5,addtocart:" ",qty:1},
];

@Component({ 
  selector: 'table-sorting-example',
  styleUrls: ['./table-sorting-example.css'],
  templateUrl: './table-sorting-example.html',
})


export class TableSortingExample implements AfterViewInit{

  displayedColumns: string[] = ['position','imageurl','details','price','addtocart','cart'];

  displayedCartColumns: string[] = ['imageurl','qty','price'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  cart:any = [];
  cartItemCount: BehaviorSubject<number> | undefined;


  constructor(private cartService: CartService) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  AddtoCart(product:any){
    this.cartService.addProduct(product);
  }

}


