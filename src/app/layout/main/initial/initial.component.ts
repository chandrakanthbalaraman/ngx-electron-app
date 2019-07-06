import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-initial-comp',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  
  constructor(
    private _electronService: ElectronService,
    
    
  ) { }

  ngOnInit() {
  }





  
}
