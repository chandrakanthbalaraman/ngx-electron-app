import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PrimengModule } from '@app/common/_modules/primeng.module';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        PrimengModule,
        NgSelectModule,
        FormsModule
        
     ],
    exports: [
        PrimengModule,
        NgSelectModule,
        FormsModule
    ],
    providers: [],
})
export class SharedModule {}