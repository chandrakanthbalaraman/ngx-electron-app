import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { MAIN_MODULES_ARR } from '@app/common/_const/ngx/ngx-modules.const';
import { HelperService } from '@app/common/_services/common/helper.service';
import { ngxHelperService } from '@app/common/_services/ngx/ngx-helper.service';
import { SETUP_OPTIONS } from '@app/common/_const/ngx/ngx-options.const';
import { GEN_PROJECT, SEEK_REF } from '@assets/wizard/ngx/config-project/generate';
import { ProjectService } from '@app/common/_services/common/project.service';
import { StorageService } from '@app/common/_services/common/storage.service';
import { APP_KEYS } from '@app/common/_const/app/app-keys.const';
import { APP_VAL } from '@app/common/_const/app/app-val.const';

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
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private storageService: StorageService
  ) {
    this.ngSetup = this.formBuilder.group({
      directory: ['D:\\dev\\learnings\\electron\\test'],
      workspace: ['newProj'],
      basicOptions: this.formBuilder.group({
        style: ['scss'],
        createApplication: [false],
        skipInstall: [true],
        skipGit: [true],
        skipTests: [true],
        force: [true],
      }),
      customOptions: this.formBuilder.group({
        createCustomStructure: [true],
        layouts: this.formBuilder.array([
          this.createLayout('basic'),
          this.createLayout('main')
        ])
      })

    })
  }
  createLayout(name?): FormGroup {
    return this.formBuilder.group({
      name: [{ value: name ? name : '', disabled: name ? true : false }, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }
  createNewLayout() {
    console.log(this.ngSetup.get('customOptions').get('layouts'));
    const layoutArr = (this.ngSetup.get('customOptions').get('layouts') as FormArray);
    layoutArr.push(this.createLayout());
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
    let formVal = this.ngSetup.getRawValue()
    const projectpath = formVal.directory + '\\';

    shell.cd(formVal.directory);
    let cmdOptions = ngxHelperService.optionToCMD(formVal.basicOptions, SETUP_OPTIONS.BASIC_OPTIONS);
    HelperService.loggerService("cmdOptions", cmdOptions);
    const shellProcess = shell.exec(`ng new ${formVal.workspace} ${cmdOptions}`, { async: true });
    shellProcess.stdout.on('data', (data) => {
      console.log('Program output:', data);
    })
    shellProcess.stderr.on('data', (error) => {
      console.log('Program error:', error);
    })
    shellProcess.on('close', (code) => {
      if (code == 0) {
        this.storageService.setItemStorage(APP_KEYS.CONFIG, formVal);
        if (formVal.customOptions.createCustomStructure) {
          this.createCustomFolder(formVal, shellProcess, projectpath);
        } else {
          shellProcess.kill();
        }

      } else {
        shellProcess.kill();
      }

    })

  }

  createCustomFolder(...arg) {
    
    const styleProcess = HelperService.getStyleProcessing(arg[0].basicOptions);
    HelperService.loggerService("styleProcess",styleProcess);
    let pathFlattenArr = HelperService.flattenNestedArray(GEN_PROJECT.ngCLIAppInfo, arg[0].workspace).map((item, index) => {
        if (HelperService.pathIncludes(SEEK_REF.STYLE_DIR, item,APP_VAL.SETUP.FILE)) {
          item.data = item.data+'.'+styleProcess;
          item.label = item.label+'.'+styleProcess;
          item.path = item.path+'.'+styleProcess;
        }
        item.id = index + 1;
        console.log(item);
        return item;
    });
    HelperService.loggerService("pathFlattenArr", pathFlattenArr);
    this.projectService.generateProject(arg[2], pathFlattenArr).then(
      (data: any) => {
        // this.files = GEN_PROJECT.appInfo;
        // this.loading = false;
        arg[1].kill();
      },
      (error) => {
        arg[1].kill();
      }
    )
  }



}
