import { Injectable } from '@angular/core';
import { generateProject } from '@assets/wizard/ngx/config-project/generate';
var mkdirp = require('mkdirp');
var nunjucks = require('nunjucks');
var async = require('async');
var fs = require('fs');

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    generateProject(dirData) {
        generateProject.appInfo[0].name = 'app';
        return new Promise((resolve, reject) => {
            async.forEach(generateProject.appInfo,function(item,loopCb){
                if(this.makeDir(dirData,item,reqObj)==undefined){
                    loopCb();
                }
            },function(err,resp){
                if(err){
                    reject(err);
                }else{
                    resolve(resp);
                }
            })
        })
    }


    makeDir(dir,data,reqObj){
        if (typeof data == typeof {} && Array.isArray(data) == true) {
            for(let obj of data){
                this.makeDir(dir, obj,reqObj)   
            }
            
        }else if(typeof data == typeof {} && Array.isArray(data) == false){
            this.createIt(dir,data,reqObj,function(err,resp){
                if(resp.hasOwnProperty('dir')){
                    this.makeDir(dir+'/'+resp.name, resp.dir,reqObj)   
                }
            })
        }
        
    }

    createIt(dir,obj,reqObj,fbCb){
        var dirData = dir+'/'+obj.name;
        console.log("dirData",dirData);
        async.waterfall([
            function(callback){
                mkdirp(dirData, function (err,resp) {
                    if (err) return callback(err);
                    else{
                        callback(null,obj)    
                    }
                });
            },
            function(obj,callback){
                if(obj.hasOwnProperty('file')){
                    nunjucks.configure({ autoescape: true });
                    async.eachSeries(obj.file, function iterator(item, loopCb) {
                        if(item.name){
                            if(item.hasOwnProperty('type')){
                                let content = nunjucks.render(this.configData[item.type]['template'],reqObj);
                                fs.writeFile(dirData+"/"+item.name, content, function(err,resp){
                                    loopCb();
                                    
                                });
                            }else{
                                let content = ''
                                fs.writeFile(dirData+"/"+item.name, content, function(err,resp){
                                    loopCb();
                                });
                            }
                        }else{
                            loopCb();
                        }
                        
                      }, function(err,resp) {
                        if(err){
                            return callback(err);
                        }else{
                            return callback(null,obj);
                        }
                      });
                }else{
                    callback(null,obj);
                }
            }
        ], function (err, result) {
            fbCb(err,result);
        });
        
        
        
    }
}