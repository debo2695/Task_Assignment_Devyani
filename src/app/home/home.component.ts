import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef, DoCheck, SimpleChanges, } from '@angular/core';
import { ListdataService } from '../listdata.service';
import { SearchPipe } from '../search.pipe';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

  data: any;
  abc: any
  @ViewChild('price') price: ElementRef | any;
  searchword: any = '';
  detailsDiv: boolean = false;
  detailsData: any;
  addDiv: boolean = false;
  addProduct: FormGroup;
  ratingClear: any;
  submitted: boolean = false;
  removedarray: any;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  priceData: any;
  dataNew: any;

  constructor(public listdataService: ListdataService,
    public searchPipe: SearchPipe,
    public router: Router,
    public fb: FormBuilder,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.data = this.listdataService.data;
    this.dataNew = this.listdataService.data;
    this.formDetails();
    localStorage.removeItem('removedItem');
  }

  formDetails() {
    this.addProduct = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
      price: ['', Validators.required],
      rating: ['', Validators.required],
      location: ['', Validators.required],
      stock: ['', Validators.required],
    })
  }

  ngDoCheck(): void {
    if (localStorage.getItem('searchword') == '' || localStorage.getItem('searchword') == null || localStorage.getItem('searchword') == undefined) {
      this.data = this.listdataService.data;
    } else {
      this.searchword = localStorage.getItem('searchword');
    }

  }

  priceClick(value: any, event: any) {
    const input = event as HTMLInputElement;

    var element = document.getElementById('stock1') as HTMLInputElement;
    element.checked = false;

    var element = document.getElementById('stock2') as HTMLInputElement;
    element.checked = false;

    if (value == '100' || value == 100) {
      var element = document.getElementById('price2') as HTMLInputElement;
      element.checked = false;
      this.listdataService.data = this.searchPipe?.transform(this.dataNew, 100);

    } else if (value == '500' || value == 500) {
      var element = document.getElementById('price1') as HTMLInputElement;
      element.checked = false;
      this.listdataService.data = this.searchPipe.transform(this.dataNew, 500);

    } else {
      this.data = this.listdataService.data;
    }

    if (event.checked == false) {
      this.data = this.dataNew;
      this.listdataService.data = this.dataNew;
    }

  }

  stockClick(value: any, event: EventTarget | null) {
    const input = event as HTMLInputElement;
    this.cdr.detectChanges();
    var element = document.getElementById('price1') as HTMLInputElement;
    element.checked = false;

    var element = document.getElementById('price2') as HTMLInputElement;
    element.checked = false;

    if (value == 'instock') {
      this.listdataService.data = this.searchPipe.transform(this.dataNew, 'instock');
    }

    if (value == 'outofstock') {
      this.listdataService.data = this.searchPipe.transform(this.dataNew, 'outofstock');
    }


  }

  clearFilters() {
    var element = document.getElementById('stock1') as HTMLInputElement;
    element.checked = false;

    var element = document.getElementById('stock2') as HTMLInputElement;
    element.checked = false;

    var element = document.getElementById('price1') as HTMLInputElement;
    element.checked = false;

    var element = document.getElementById('price2') as HTMLInputElement;
    element.checked = false;

    this.listdataService.data = this.dataNew;
  }

  clickFunct(value: any) {
    this.detailsData = value;
    this.detailsDiv = true;
    this.addDiv = false;
  }

  backFunct() {
    this.detailsDiv = false;
  }

  addFunct() {
    this.addDiv = true;
    this.detailsDiv = false;
  }

  backFunctionForAdd() {
    this.addDiv = false;
    this.detailsDiv = false;
    this.addProduct.reset();
  }

  keyUp(value: any) {
    if (value.value > 5) {
      this.ratingClear = null;
    }
  }

  get f() {
    return this.addProduct.controls;
  }

  removeData(value: any) {
    localStorage.setItem('removedItem', JSON.stringify(value));
    const index = this.listdataService.data.indexOf(value);
    if (index > -1) {
      this.listdataService.data.splice(index, 1);
    }
    this.listdataService.data = this.listdataService.data;
    Swal.fire('Removed successfully & moved to trash!', 'success')
    this.router.navigate(['dashboard/trash']);

  }

  submitForm(value: any) {
    this.submitted = true;

    if (this.addProduct.invalid) {
      return;
    } else {
      localStorage.setItem('formDetails', this.addProduct.value);
    }
  }



}
