import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { MAIN_MODULES_ARR } from '@app/common/_const/ngx/ngx-modules.const';
import { HelperService } from '@app/common/_services/common/helper.service';

@Component({
  selector: 'app-initial-comp',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  mainModuleArr = MAIN_MODULES_ARR;
  selectedModule:Array<any> = [];
  constructor(
    private _electronService: ElectronService,
    
    
  ) { }

  ngOnInit() {
  }


  formModule(){
   
    let modulePathArr = HelperService.generateChildrenArr(this.selectedModule,'name');
    HelperService.loggerService("modulePathArr",modulePathArr);
    let mainModule = [
        {
          "label": "app.module.ts",
          "data": "app.module.ts",
          "type":"file",
          "templateType": "module"
       }
    ]
    let mainModuleFlattenArr = HelperService.flattenNestedArray(mainModule);
    HelperService.loggerService("mainModuleFlattenArr",mainModuleFlattenArr);
    for(let obj of mainModuleFlattenArr){
      let renderData = {
        modulePackageArr:modulePathArr,
        isMainModule:true,
        moduleName:'Main'
      };
      HelperService.loggerService("templatePath",HelperService.nunjuckRender(HelperService.getTemplatePath(obj.templateType),renderData));
    }
  }




  
}
