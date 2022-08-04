import { Component, OnInit, Host } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls:['./page2.css'],
})
export class Page2Component implements OnInit {
  form: any;
  status: string[];
  submitted: boolean = false;

  constructor() { 
    this.status = [];
  }

  ngOnInit(){
    this.status = ['Online Order', 'Book a table', 'Other queries'];
  }
  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}
