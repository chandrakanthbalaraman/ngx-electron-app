import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { MAIN_MODULES_ARR } from '@app/common/_const/ngx/ngx-modules.const';
import { HelperService } from '@app/common/_services/common/helper.service';
import { ngxHelperService } from '@app/common/_services/ngx/ngx-helper.service';
import { SETUP_OPTIONS } from '@app/common/_const/ngx/ngx-options.const';
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
  ngSetup: FormGroup;
  constructor(
    private _electronService: ElectronService,
    private formBuild: FormBuilder
  ) {
    this.ngSetup = this.formBuild.group({
      directory:[''],
      workspace:[''],
      basicOptions:this.formBuild.group({
        style:['scss'],
        createApplication:[false],
        skipInstall:[true],
        skipGit:[true],
        skipTests:[true],
        force:[true],
      })
      
    })
   }

  ngOnInit(){
    
  }

  showDialog() {
    if (this._electronService.isElectronApp) {
      const { dialog } = this._electronService.remote;
      dialog.showOpenDialog({ properties: ['openDirectory'] }, (data) => {
        if (data) {
          this.projectPath = data[0];
          let dataObj = {
            directory: this.projectPath
          }
          this.ngSetup.patchValue(dataObj);
        }
      })
    }

  }

  createProject(){
    let formVal = this.ngSetup.value
    let cmdOptions = ngxHelperService.optionToCMD(formVal.basicOptions,SETUP_OPTIONS.BASIC_OPTIONS);
    shell.cd(this.projectPath);
    shell.exec(`ng new ${formVal.workspace} ${cmdOptions}`, (code, stdout, stderr) =>{
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
    });

  }



  
}
