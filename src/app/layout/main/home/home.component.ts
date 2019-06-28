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


  // promiseTree(){
  //   return new Promise((resolve,reject)=>{
  //     resolve(generateProject);
  //   });
  // }

  // generateTree(){
  //   this.loading = true;
  //   this.promiseTree().then(
  //     (data:any)=>{
  //       setTimeout(()=>{
  //         this.files = data.appInfo;
  //         this.loading = false;
  //       },3000);
        
  //     }
  //   )
  // }



  showDialog() {
    if (this._electronService.isElectronApp) {
      const { dialog } = this._electronService.remote;
      var fs = this._electronService.remote.require('fs');
      dialog.showOpenDialog({ properties: ['openDirectory'] }, (data) => {
        if (data) {
          let projectPath = data[0];
          console.log("projectPath", projectPath);
          console.log("result",this.projectService.flattenNestedArray(generateProject.appInfo).map((item,index)=>{
            item.id = index+1;
            return item;
          }));
          this.zone.run(() => {
            this.files = generateProject.appInfo;
            this.loading = false;
          });
          // this.projectService.generateProject(projectPath).then(
          //   (data: any) => {
          //     console.log("data", data);
          //   },
          //   (error) => {
          //     console.log("error", error);
          //   }
          // )
        }
      })
    }

  }

  CompileString() {
    if (this._electronService.isElectronApp) {
      nunjucks.configure({ autoescape: true });
      nunjucks.render("assets/wizard/ngx/templates/modules/module.html", { username: 'James' }, (err, resp) => {

        this.zone.run(() => {
          this.compiledData = resp;
        });
      });
    }

  }
}
