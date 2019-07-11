import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_CONFIG } from '@app/common/_const/app/app-config.const';

const routes: Routes = [
    {
        path: '',
        redirectTo: APP_CONFIG.ROUTER.INITIAL_PAGE,
        pathMatch: 'full',
    },
    {
        path: 'page',
        loadChildren: './layout/main/main.module#MainModule',
    },
    {
        path: '**',
        redirectTo: APP_CONFIG.ROUTER.INITIAL_PAGE
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
