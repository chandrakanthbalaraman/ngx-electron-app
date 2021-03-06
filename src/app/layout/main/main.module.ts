import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@app/layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: '',
        redirectTo: 'home'

      }
    ]
  },
  {
    path: '**',
    redirectTo: 'page/home',
    pathMatch: 'full',
  }
]
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MainModule { }