import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'page/initial',
        pathMatch: 'full',
    },
    {
        path: 'page',
        loadChildren: './layout/main/main.module#MainModule',
    },
    {
        path: '**',
        redirectTo: 'page/initial'
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
