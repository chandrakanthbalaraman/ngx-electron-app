import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from '@app/layout/main/workspace/workspace.component';
import { SharedModule } from '@app/common/_modules/shared.module';

const routes: Routes = [
  {
      path: '',
      component: WorkspaceComponent,
  }
]
@NgModule({
  declarations: [
    WorkspaceComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule],
  providers: [],
})
export class WorkspaceModule { }
