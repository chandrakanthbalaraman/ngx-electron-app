import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from '@app/layout/main/initial/initial.component';
import { SharedModule } from '@app/common/_modules/shared.module';

const routes: Routes = [
    {
        path: '',
        component: InitialComponent,
    }
]
@NgModule({
    declarations: [
        InitialComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
    exports: [RouterModule],
    providers: [],
})
export class SkeletonModule { }