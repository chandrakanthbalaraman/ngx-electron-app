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
    directoryArr:Array<string> = [];
    generateProject(dirData) {
        return new Promise((resolve, reject) => {
            asyncJS.forEach(generateProject.appInfo, (item, loopCb) => {
                if(this.makeDir(dirData, item, null)==undefined){
                    console.log("project paths",this.directoryArr.map((item)=>{
                            return item.replace(dirData,'');
                    }));
                    loopCb();
                }
            }, function (err, resp) {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            })
        })
    }


   
    makeDir(dir, data, reqObj): any {
        if (typeof data == typeof {} && Array.isArray(data) == true) {
            for (let obj of data) {
               this.makeDir(dir, obj, reqObj);
            }

        } else if (typeof data == typeof {} && Array.isArray(data) == false) {
            this.createIt(dir, data, reqObj, (err, resp) => {
                if (resp.hasOwnProperty('dir')) {
                    this.makeDir(dir + '/' + resp.name, resp.dir, reqObj);
                }
            })
        }
    }

    createIt(dir, obj, reqObj, fbCb) {
        var dirData = path.resolve(dir + '/' + obj.name);
        this.directoryArr.push(dirData);
        mkdirp.sync(dirData);
        if (obj.hasOwnProperty('file')) {
            nunjucks.configure({ autoescape: true });
            asyncJS.eachSeries(obj.file, (item, loopCb) => {
                if(item.name){
                    if(item.hasOwnProperty('type')){
                        let content = nunjucks.render(templatePath[item.type]['template'],reqObj);
                        fs.writeFileSync(dirData+"/"+item.name, content);
                        loopCb();
                    }else{
                        let content = ''
                        fs.writeFileSync(dirData+"/"+item.name, content);
                        loopCb();
                    }
                }else{
                    loopCb();
                }

            }, (err, resp) => {
                if (err) {
                    fbCb(err);
                } else {
                    fbCb(null, obj);
                }
            });
        } else {
            fbCb(null, obj);
        }


    }
}