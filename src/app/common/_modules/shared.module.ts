import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '@app/common/_modules/primeng.module';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        PrimengModule
     ],
    exports: [
        PrimengModule
    ],
    providers: [],
})
export class SharedModule {}