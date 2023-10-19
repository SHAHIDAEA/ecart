import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent {
  id: any
  pdata: any = {}
  constructor(private ds: DataService, private ar: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.id = data.id
      // console.log(this.id);

    })

    this.ds.getProduct(this.id).subscribe({
      next: (result: any) => {
        this.pdata = result
        // console.log(this.pdata);

      }
    })
  }

  deleteitem(){
    this.ds.removeProduct(this.id).subscribe({
      next:(result:any)=>{
        this.route.navigateByUrl('')
      }
    })
      
    
  }
}
