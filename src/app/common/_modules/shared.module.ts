import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PrimengModule } from '@app/common/_modules/primeng.module';
import { AppHeaderComponent } from '@app/common/_components/app-header/app-header.component';
import { NgxBootstrapModule } from '@app/common/_modules/ngxbootstrap.module';

@NgModule({
    declarations: [
        AppHeaderComponent
    ],
    imports: [ 
        CommonModule,
        PrimengModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        NgxBootstrapModule
        
     ],
    exports: [
        PrimengModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppHeaderComponent,
        NgxBootstrapModule
    ],
    providers: [],
})
export class SharedModule {}