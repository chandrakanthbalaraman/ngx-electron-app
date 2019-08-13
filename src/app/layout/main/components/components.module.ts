import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from '@app/layout/main/components/components.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/common/_modules/shared.module';
const routes: Routes = [
  {
      path: '',
      component: ComponentsComponent,
      children: [
        {
          path: 'card',
          loadChildren: './card/card.module#AppCardModule',
        },
        {
          path: '',
          redirectTo: 'page/workspace/component/card'
  
        }
      ]
      
  },
  {
    path: '**',
    redirectTo: 'page/workspace/component/card',
    pathMatch: 'full',
  }
]
@NgModule({
  declarations: [ComponentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule],
})
export class ComponentsModule { }
