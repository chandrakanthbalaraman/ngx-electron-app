import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { PrimengModule } from '@app/common/_modules/primeng.module';
import { AppHeaderComponent } from '@app/common/_components/app-header/app-header.component';
import { NgxBootstrapModule } from '@app/common/_modules/ngxbootstrap.module';
import { AppSidebarComponent } from '../_components/app-sidebar/app-sidebar.component';

@NgModule({
    declarations: [
        AppHeaderComponent,
        AppSidebarComponent
    ],
    imports: [ 
        CommonModule,
        PrimengModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        NgxBootstrapModule,
        RouterModule
        
     ],
    exports: [
        PrimengModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppHeaderComponent,
        NgxBootstrapModule,
        RouterModule,
        AppSidebarComponent
    ],
    providers: [],
})
export class SharedModule {}