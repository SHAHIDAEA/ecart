import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent {

allProducts:any=[]
categoryProducts:any=[]
SearchString:any=""
  constructor(private ds:DataService){}
  ngOnInit():void{
  this.ds.getAllProducts().subscribe({
    next:(result:any)=>{
      this.allProducts=result
      // console.log(this.allProducts);
      this.categoryProducts=this.allProducts
      
    }
  })

  this.ds.search.subscribe((data:any)=>{
    this.SearchString=data
  })
  }

categoryProduct(catId:any){
this.categoryProducts=this.allProducts.filter((item:any)=>
  item['categoryId']==catId || catId==""
)
console.log(this.categoryProducts);

}

}
