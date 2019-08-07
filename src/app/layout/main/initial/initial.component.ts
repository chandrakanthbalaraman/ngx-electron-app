import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { MAIN_MODULES_ARR } from '@app/common/_const/ngx/ngx-modules.const';
import { HelperService } from '@app/common/_services/common/helper.service';
import { ngxHelperService } from '@app/common/_services/ngx/ngx-helper.service';
import { SETUP_OPTIONS } from '@app/common/_const/ngx/ngx-options.const';
import { generateProject } from '@assets/wizard/ngx/config-project/generate';
import { ProjectService } from '@app/common/_services/common/project.service';

var shell = require('shelljs');
var path = require('path');


@Component({
  selector: 'app-initial-comp',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  mainModuleArr = MAIN_MODULES_ARR;
  selectedModule: Array<any> = [];
  projectPath: string;
  ngSetup: FormGroup;
  constructor(
    private _electronService: ElectronService,
    private formBuild: FormBuilder,
    private projectService: ProjectService
  ) {
    this.ngSetup = this.formBuild.group({
      directory: ['D:\\dev\\learnings\\electron\\test'],
      workspace: ['newProj'],
      basicOptions: this.formBuild.group({
        style: ['scss'],
        createApplication: [false],
        skipInstall: [true],
        skipGit: [true],
        skipTests: [true],
        force: [true],
      })

    })
  }

  ngOnInit() {

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

  createProject() {
    let formVal = this.ngSetup.value
    const projectpath = formVal.directory +'\\';
    
    shell.cd(formVal.directory);
    let cmdOptions = ngxHelperService.optionToCMD(formVal.basicOptions, SETUP_OPTIONS.BASIC_OPTIONS);
    HelperService.loggerService("cmdOptions",cmdOptions);
    const shellProcess = shell.exec(`ng new ${formVal.workspace} ${cmdOptions}`, {async:true});
    shellProcess.stdout.on('data',(data)=>{
        console.log('Program output:', data);  
    })
    shellProcess.stderr.on('data',(error)=>{
      console.log('Program error:', error);  
    })
    shellProcess.on('close',(code)=>{
        console.log('Exit code:', code);  
        if(code==0){
          let pathFlattenArr = HelperService.flattenNestedArray(generateProject.ngCLIAppInfo, formVal.workspace).map((item, index) => {
            item.id = index + 1;
            return item;
            });
            HelperService.loggerService("pathFlattenArr", pathFlattenArr);
            this.projectService.generateProject(projectpath, pathFlattenArr).then(
              (data: any) => {
                // this.files = generateProject.appInfo;
                // this.loading = false;
                shellProcess.kill();
              },
              (error) => {
              }             
            )
        }
        
    })
    
  }



}
