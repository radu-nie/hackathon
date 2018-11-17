import { Component, OnInit } from '@angular/core';
import { IndicesService } from './indices.service';
@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.scss'],
  providers: [IndicesService]
})
export class IndicesComponent implements OnInit {

  constructor(private indicesServices: IndicesService) { }

  ngOnInit() {
    this.indicesServices.getIndices().then(data => {
      console.log(data);
    })
  }

}
