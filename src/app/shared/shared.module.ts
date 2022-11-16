import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent
  ],
  exports: [
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
