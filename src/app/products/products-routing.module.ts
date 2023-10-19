import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [{ path: '', component: AllProductsComponent },
{path:'view-products/:id',component:SingleViewComponent},
{path:'add-products',component:AddProductComponent},
{path:'edit-products/:id',component:EditProductComponent},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
