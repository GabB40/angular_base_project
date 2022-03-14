import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'router', component: AppComponent },
  { path: 'test', component: AppComponent },
  { path: 'router/:id', component: AppComponent },
  { path: '', redirectTo: '/router', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
