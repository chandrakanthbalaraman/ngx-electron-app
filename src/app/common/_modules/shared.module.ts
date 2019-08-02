import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PrimengModule } from '@app/common/_modules/primeng.module';
import { AppHeaderComponent } from '@app/common/_components/app-header/app-header.component';

@NgModule({
    declarations: [
        AppHeaderComponent
    ],
    imports: [ 
        CommonModule,
        PrimengModule,
        NgSelectModule,
        FormsModule
        
     ],
    exports: [
        PrimengModule,
        NgSelectModule,
        FormsModule,
        AppHeaderComponent
    ],
    providers: [],
})
export class SharedModule {}