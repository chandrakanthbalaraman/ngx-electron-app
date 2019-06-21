import { Component, OnInit, NgZone  } from '@angular/core';
import { ElectronService } from 'ngx-electron';
const nunjucks = require('nunjucks');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  compiledData: string;
  constructor(
    private _electronService: ElectronService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    
  }

  showDialog() {
    const { dialog } = this._electronService.remote;
    var fs = this._electronService.remote.require('fs');
    dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }, (data) => {
      console.log("data", data);
      fs.readdir(data[0], function (err, items) {
        console.log(items);

        for (var i = 0; i < items.length; i++) {
          console.log(items[i]);
        }
      });
    })
  }

  showIPC() {
    
    nunjucks.configure({ autoescape: true });
    nunjucks.renderString('Hello {{ username }}', { username: 'James' },(err,resp)=>{
      
      this.zone.run(() => {
        this.compiledData = resp;
      });
    });
  }
}
