import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { MAIN_MODULES_ARR } from '@app/common/_const/ngx/ngx-modules.const';
import { HelperService } from '@app/common/_services/common/helper.service';
var shell = require('shelljs');


@Component({
  selector: 'app-initial-comp',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  mainModuleArr = MAIN_MODULES_ARR;
  selectedModule:Array<any> = [];
  projectPath:string;
  constructor(
    private _electronService: ElectronService,
    
    
  ) { }

  ngOnInit() {
    this._electronService.ipcRenderer.on('generate:emit', (event, resp) => {
      console.log("resp",resp);
    });
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


  showDialog() {
    if (this._electronService.isElectronApp) {
      const { dialog } = this._electronService.remote;
      dialog.showOpenDialog({ properties: ['openDirectory'] }, (data) => {
        if (data) {
          this.projectPath = data[0];
          console.log("projectPath", this.projectPath);
          // this._electronService.ipcRenderer.send('generate:list', this.projectPath);
          shell.cd(this.projectPath);
          let options = '--style=scss --createApplication=false --skip-install=true --skipGit=true --skipTests=true --force=true';
          shell.exec(`ng new generate-app ${options}`, (code, stdout, stderr) =>{
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);
          });
          
         
        }
      })
    }

  }



  
}
