import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  id: string | null = '';
  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    // this.ar.params.subscribe((param)=>{
    //   console.log(param)
    //   this.id = param['id'];
    // })
    this.ar.paramMap.subscribe((param)=>{
      this.id = param.get("id")
    })
  }

}
