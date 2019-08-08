import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import {TreeNode} from 'primeng/api';

import { ProjectService } from '@app/common/_services/common/project.service';
import { GEN_PROJECT } from '@assets/wizard/ngx/config-project/generate';
import { HelperService } from '@app/common/_services/common/helper.service';
const nunjucks = require('nunjucks');
const path = require('path');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  compiledData: string;
  loading: boolean = true;
  files = <any>{};

  selectedFile: TreeNode;
  projectPath:string = '';
  constructor(
    private _electronService: ElectronService,
    private zone: NgZone,
    private projectService: ProjectService
    
  ) { }

  ngOnInit() {
  //  this.files = GEN_PROJECT.appInfo;
  }





  showDialog() {
    if (this._electronService.isElectronApp) {
      const { dialog } = this._electronService.remote;
      dialog.showOpenDialog({ properties: ['openDirectory'] }, (data) => {
        if (data) {
          this.projectPath = data[0];
          console.log("projectPath", this.projectPath);
          let pathFlattenArr = HelperService.flattenNestedArray(GEN_PROJECT.appInfo).map((item,index)=>{
            item.id = index+1;
            return item;
          });
           HelperService.loggerService("pathFlattenArr",pathFlattenArr);
          this.projectService.generateIt(this.projectPath,pathFlattenArr).then(
            (data: any) => {
              this.files = GEN_PROJECT.appInfo;
              this.loading = false;
            },
            (error) => {
            }
          )
        }
      })
    }

  }

  nodeSelect($event){
    console.log("$event",$event);
  }

  mainLayout(){
    if(this.selectedFile){
      let mainLayout= [
          {
              "label": "basic",
              "data": "basic",
              "type":"dir",


          },
          {
              "label": "layout",
              "data": "layout",
              "type":"dir",

          }
      ]
      
      let parentPath = "/"+HelperService.getParentPath(this.selectedFile);
      let pathFlattenArr = HelperService.flattenNestedArray(mainLayout,parentPath).map((item,index)=>{
        item.id = index+1;
        return item;
      });
      HelperService.loggerService("pathFlattenArr",pathFlattenArr);
      this.projectService.generateIt(this.projectPath,pathFlattenArr).then(
        (data: any) => {
          this.selectedFile.children = [...mainLayout];
        },
        (error) => {
        }
      )
       
    }
  }

  openExplorer(){
    if (this._electronService.isElectronApp) {
      const { shell } = this._electronService.remote;
      shell.showItemInFolder("D:/dev/learnings/electron/test/generate");
    }
  }

 
}
