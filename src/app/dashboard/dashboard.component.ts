import { Component, DoCheck } from '@angular/core';
import { SearchbywordPipe } from '../searchbyword.pipe';
import { ListdataService } from '../listdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements DoCheck{

  data: any[] = [];
  searchword: any;
  selectedNode: any;
  currentURLHome: boolean = false;
  currentURLTrash: boolean = false;

  constructor(public searchByword: SearchbywordPipe,
    public listdataService: ListdataService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.data = this.listdataService.data;
  }

  ngDoCheck(): void {
    if(this.router.url == '/dashboard/trash') {
      this.currentURLHome = false;
    } else {
      this.currentURLHome = true;
    }
    if(this.router.url == '/dashboard/home') {
      this.currentURLTrash = false;
    } else {
      this.currentURLTrash = true;
    }
  }

  searchFunc(event: any) {
    localStorage.setItem('searchword', event);
  }

}
