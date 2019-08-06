import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule  } from 'ngx-bootstrap';

@NgModule({
    declarations: [],
    imports: [ CommonModule,AccordionModule.forRoot()  ],
    exports: [AccordionModule ],
    providers: [],
})
export class NgxBootstrapModule {}