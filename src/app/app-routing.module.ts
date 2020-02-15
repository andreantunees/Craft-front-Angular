import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { CheckPostCodeComponent } from './check-post-code/check-post-code.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent, data: { title: 'Recent Searchs '} },
  { path: 'postcode', component: CheckPostCodeComponent, data: { title: 'Search PostCode '} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
