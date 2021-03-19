import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChineseComponent } from './chinese/chinese.component';
import { DiffieHellmanComponent } from './diffie-hellman/diffie-hellman.component';

const routes: Routes = [
  { path: '', redirectTo: '/chinese', pathMatch: 'full'},
  { path: 'chinese', component: ChineseComponent },
  { path: 'diffie-hellman', component: DiffieHellmanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
