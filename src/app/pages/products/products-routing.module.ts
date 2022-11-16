import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    // component: ProductsComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      // {
      //   path: '',
      //   redirectTo: ''
      // },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
