import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '@app/layout/main/default/default.component';
import { SharedModule } from '@app/common/_modules/shared.module';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
    }
]
@NgModule({
    declarations: [
        DefaultComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
    exports: [RouterModule],
    providers: [],
})
export class DefaultModule { }