import { Injectable } from '@angular/core';

import { HelperService } from '@app/common/_services/common/helper.service';
var mkdirp = require('mkdirp');

var asyncJS = require('async');
var fs = require('fs');
var path = require('path');

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    generateProject(dirData,flattenArr) {
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
        console.log("dirPath",dirPath);
        if(obj.type == 'dir'){
            mkdirp(dirPath,(err,resp)=>{
                console.log("err",err);
                console.log("resp",resp);
                fbCb(err,resp);
            });
        }else if(obj.type == 'file'){
            
                if(obj.label ){
                    let content = obj.hasOwnProperty('templateType') ? 
                    HelperService.nunjuckRender(HelperService.getTemplatePath(obj.templateType)): ''
                    fs.writeFile(dirPath, content,(err,resp)=>{
                        fbCb(err,resp);
                    });
                    
                }
        }
        

    }

    
}