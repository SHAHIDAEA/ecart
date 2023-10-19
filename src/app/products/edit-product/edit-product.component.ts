import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})


export class EditProductComponent {

pid:any=""
pdata:any={}
 constructor(private ar:ActivatedRoute,private ds:DataService ,private rout:Router){}
 ngOnInit():void{
this.ar.params.subscribe(data=>{
this.pid=data['id']
console.log(this.pid);

})

this.ds.getProduct(this.pid).subscribe({
  next:(result:any)=>{
this.pdata=result
console.log(this.pdata);

  }
})
 }
 update(){
  this.ds.UpdateProduct(this.pid,this.pdata).subscribe({
    next:(result:any)=>{
      alert("Product Data Updated")
      this.rout.navigateByUrl(`products/view-products/${this.pid}`)
    }
  })
 }
}
