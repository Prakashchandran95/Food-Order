import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TableSortingExample}  from './table-sorting-example';


describe('TableSortingExample', () => {
  let component:TableSortingExample;
  let fixture: ComponentFixture<TableSortingExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSortingExample ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSortingExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
