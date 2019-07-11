import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@app/layout/main/main.component';
import { SharedModule } from '@app/common/_modules/shared.module';
import { APP_CONFIG } from '@app/common/_const/app/app-config.const';

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
        path: 'default',
        loadChildren: './default/default.module#DefaultModule',
      },
      {
        path: 'initial',
        loadChildren: './initial/initial.module#InitialModule',
      },
      {
        path: '',
        redirectTo: 'initial'

      }
    ]
  },
  {
    path: '**',
    redirectTo: APP_CONFIG.ROUTER.INITIAL_PAGE,
    pathMatch: 'full',
  }
]
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule],
  providers: [],
})
export class MainModule { }