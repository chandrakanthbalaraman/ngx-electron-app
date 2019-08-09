import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { MAIN_MODULES_ARR } from '@app/common/_const/ngx/ngx-modules.const';
import { HelperService } from '@app/common/_services/common/helper.service';
import { ngxHelperService } from '@app/common/_services/ngx/ngx-helper.service';
import { SETUP_OPTIONS } from '@app/common/_const/ngx/ngx-options.const';
import { GEN_PROJECT, SEEK_REF, CUSTOM_CREATION } from '@assets/wizard/ngx/config-project/generate';
import { ProjectService } from '@app/common/_services/common/project.service';
import { StorageService } from '@app/common/_services/common/storage.service';
import { APP_KEYS } from '@app/common/_const/app/app-keys.const';
import { APP_VAL } from '@app/common/_const/app/app-val.const';
import { CORE_REGEX } from '@app/common/_const/core/core-regex.const';

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
  regexArr:Array<any> = [];
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
      }),
      styleOptions: this.formBuilder.group({
        createDefaultMixin:[true]
      })

    })
  }
  createLayout(name?): FormGroup {
    return this.formBuilder.group({
      name: [{ value: name ? name : '', disabled: name ? true : false }, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.setConstOptions()
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
        shellProcess.kill();

      } else {
        shellProcess.kill();
      }

    })

  }
  createCustomStructure(){
    let configData = this.storageService.getItemStorage(APP_KEYS.CONFIG)
    const projectpath = configData.directory + '\\';
    if (configData.customOptions.createCustomStructure) {
      this.createCustomFolder(configData, projectpath);
    }
  }

  createCustomFolder(configData,projectpath) {
    const formDataVal = configData;
    const styleProcess = HelperService.getStyleProcessing(formDataVal.basicOptions);
    let pathFlattenArr = HelperService.flattenNestedArray(GEN_PROJECT.ngCLIAppInfo, formDataVal.workspace).map((item, index) => {
        if (HelperService.pathIncludes(SEEK_REF.STYLE_DIR, item,APP_VAL.SETUP.FILE)) {
          item.data = item.data+'.'+styleProcess;
          item.label = item.label+'.'+styleProcess;
          item.path = item.path+'.'+styleProcess;
        }
        // item.id = index + 1;
        console.log(item);
        return item;
    });
    HelperService.loggerService("formDataVal.customOptions.layouts",formDataVal.customOptions.layouts);
    if(formDataVal.customOptions.layouts.length > 0){
      pathFlattenArr.push(...HelperService.addbyType(formDataVal.customOptions.layouts,SEEK_REF.LAYOUT_DIR,formDataVal.workspace,APP_VAL.SETUP.DIR))
    }
    HelperService.loggerService("pathFlattenArr", pathFlattenArr);
    this.generateProject(projectpath,pathFlattenArr,(err,resp)=>{
      if(!err){
        console.log("success");
      }else{
        console.log("error");
      }
      
    })
   
  }

  generateProject(projectPath,pathFlattenArr,cb){
    this.projectService.generateIt(projectPath, pathFlattenArr).then(
      (data: any) => {
        // this.files = GEN_PROJECT.appInfo;
        // this.loading = false;
        cb(null,data)
      },
      (error) => {
        cb(error)
      }
    )
  }

  setConstOptions(){
    this.regexArr = CORE_REGEX.map((item:any)=>{
        item.isActive = true;
        return item;
    })
  }

  createRegex(){
    let configData = this.storageService.getItemStorage(APP_KEYS.CONFIG)
    let constConfigArr = HelperService.addbyType(CUSTOM_CREATION.CONST_SECTION.CHILDREN,CUSTOM_CREATION.CONST_SECTION.PATH,configData.workspace,APP_VAL.SETUP.FILE)
    HelperService.loggerService("constConfig",constConfigArr);
    let renderData = {
      valArr:this.regexArr,
      name:'APP_REGEX'
    }
    for(let obj of constConfigArr){
      HelperService.loggerService("obj.path",obj.path);
      this.projectService.writeFileSync(configData.directory + '\\',obj.path,HelperService.nunjuckRender(HelperService.getTemplatePath(obj.templateType),renderData))
    }
    

  }

  createStyleOptions(){
    let configData = this.storageService.getItemStorage(APP_KEYS.CONFIG)
    let formVal = this.ngSetup.getRawValue();
    if(formVal.styleOptions && formVal.styleOptions.createDefaultMixin && configData.basicOptions.style === 'scss'){
      
    }
  }


}
