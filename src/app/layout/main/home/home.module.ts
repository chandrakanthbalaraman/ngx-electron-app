import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/layout/main/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
]
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class HomeModule { }