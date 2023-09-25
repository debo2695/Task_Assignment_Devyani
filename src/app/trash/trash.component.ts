import { Component } from '@angular/core';
import { ListdataService } from '../listdata.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {

  data: any;
  localstore: any;

  constructor(public listdataService: ListdataService,) { }

  ngOnInit() {
    this.data = this.listdataService.dataForTrash;
    this.localstore = localStorage.getItem('removedItem');
    if(this.localstore == '' || this.localstore == null || this.localstore == undefined) {
    } else {
      this.listdataService.dataForTrash.push(JSON.parse(this.localstore));
    }
   
  }

}
