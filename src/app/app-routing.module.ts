import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvGrid1Component } from './tv-grid1/tv-grid1.component';
import { ApiKeyComponent } from './api-key/api-key.component';

const routes: Routes = [
  { path: 'list', component: TvGrid1Component },
  { path: '', component: ApiKeyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
