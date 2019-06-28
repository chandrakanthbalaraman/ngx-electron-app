import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeModule} from 'primeng/tree';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        TreeModule
     ],
    exports: [
        TreeModule
    ],
    providers: [],
})
export class PrimengModule {}