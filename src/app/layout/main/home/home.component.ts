import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ProjectService } from '@app/common/_services/common/project.service';
import { generateProject } from '@assets/wizard/ngx/config-project/generate';
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
  constructor(
    private _electronService: ElectronService,
    private zone: NgZone,
    private projectService: ProjectService
    
  ) { }

  ngOnInit() {
   
  }





  showDialog() {
    if (this._electronService.isElectronApp) {
      const { dialog } = this._electronService.remote;
      dialog.showOpenDialog({ properties: ['openDirectory'] }, (data) => {
        if (data) {
          let projectPath = data[0];
          console.log("projectPath", projectPath);
          let pathFlattenArr = this.projectService.flattenNestedArray(generateProject.appInfo).map((item,index)=>{
            item.id = index+1;
            return item;
          });
           
          this.projectService.generateProject(projectPath,pathFlattenArr).then(
            (data: any) => {
              this.files = generateProject.appInfo;
              this.loading = false;
            },
            (error) => {
            }
          )
        }
      })
    }

  }

 
}
