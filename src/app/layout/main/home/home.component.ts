import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ProjectService } from '@app/common/_services/common/project.service';
const nunjucks = require('nunjucks');
const path = require('path');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  compiledData: string;
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
      var fs = this._electronService.remote.require('fs');
      dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }, (data) => {
        if (data) {
          let projectPath = path.resolve(data[0] + '/v1');
          console.log("projectPath", projectPath);
          this.projectService.makeDir(projectPath).then(
            (data: any) => {
              console.log("data", data);
            },
            (error) => {
              console.log("error", error);
            }
          )
        }

        // fs.readdir(data[0], function (err, items) {
        //   console.log(items);

        //   for (var i = 0; i < items.length; i++) {
        //     console.log(items[i]);
        //   }
        // });
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