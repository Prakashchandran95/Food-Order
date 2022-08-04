import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  myimage:string = "assets/image/workfal.jpg";

  constructor(private cartService: CartService){}
}