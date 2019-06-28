import { Injectable } from '@angular/core';
import { generateProject } from '@assets/wizard/ngx/config-project/generate';
import { templatePath } from '@assets/wizard/ngx/config-project/template-path';
var mkdirp = require('mkdirp');
var nunjucks = require('nunjucks');
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
                fbCb(err,resp);
            });
        }else if(obj.type == 'file'){
            nunjucks.configure({ autoescape: true });
                if(obj.label ){
                    let content = obj.hasOwnProperty('templateType') ? 
                    nunjucks.render(templatePath[obj.templateType]['template']): ''
                    fs.writeFile(dirPath, content,(err,resp)=>{
                        fbCb(err,resp);
                    });
                    
                }
        }
        

    }

    flattenNestedArray(dataArr,dir=''){
        var result = [];
        dataArr.forEach((a)=> {
            a.path = dir+'/'+a.label;
            result.push(a);
            if (Array.isArray(a.children)) {
               result = result.concat(this.flattenNestedArray(a.children,a.path));
            }
        });
        return result;
    }
}