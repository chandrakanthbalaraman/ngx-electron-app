import { Injectable } from '@angular/core';

import { HelperService } from '@app/common/_services/common/helper.service';
import { APP_VAL } from '@app/common/_const/app/app-val.const';
var mkdirp = require('mkdirp');

var asyncJS = require('async');
var fs = require('fs');
var path = require('path');

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    generateIt(dirData,flattenArr) {
        return new Promise((resolve, reject) => {
            asyncJS.forEach(flattenArr, (item, loopCb) => {
               this.createIt(dirData,item,(err,resp)=>{
                    loopCb();
               })
            }, function (err, resp) {
                resolve(true);
            })
        })
    }


   
  

    createIt(dir, obj, fbCb) {
        var dirPath = path.resolve(dir + obj.path);
        if(obj.type === APP_VAL.SETUP.DIR){
            mkdirp(dirPath,(err,resp)=>{
                fbCb(err,resp);
            });
        }else if(obj.type === APP_VAL.SETUP.FILE){
            
                if(obj.label ){
                    let content = obj.hasOwnProperty('templateType') ? 
                    HelperService.nunjuckRender(HelperService.getTemplatePath(obj.templateType)): ''
                    this.writeFile(dirPath,content,(err,resp)=>{
                        fbCb(err,resp);
                    })
                }
        }
        

    }

    writeFile(dirPath,content,fbCb){
        fs.writeFile(dirPath, content,(err,resp)=>{
            fbCb(err,resp);
        });
    }
    writeFileSync(dir, pathVal, content){
        let dirPath = path.resolve(dir + pathVal);
        return fs.writeFileSync(dirPath, content, 'utf8');
        
    }

    
}