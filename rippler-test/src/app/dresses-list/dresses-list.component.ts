import { Component } from '@angular/core';
import { DressService } from '../dress.service';
import { Dress } from '../app.models';

@Component({
  selector: 'app-dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.scss']
})
export class DressesListComponent {
  dresses:Dress[]
  constructor(private dressService: DressService){
   
  }

  ngOnInit(){
    this.dressService.getDresses().subscribe((resp:Dress[]) => {
      this.dresses = resp;
    });
  }
 
}
