import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  
  constructor(
    private _electronService: ElectronService,
    
    
  ) { }

  ngOnInit() {
  }





  
}
