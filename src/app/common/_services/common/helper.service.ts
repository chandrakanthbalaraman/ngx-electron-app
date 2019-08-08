import { AppConfig } from "@env/environment";
import { templatePath } from '@assets/wizard/ngx/config-project/template-path';
import * as _ from 'underscore';
import { APP_VAL } from "@app/common/_const/app/app-val.const";


var path = require('path');
var nunjucks = require('nunjucks');
nunjucks.configure({ autoescape: true });


export class HelperService{

    
      /**
     * Console Logger Service
     * @param name 
     * @param data 
     */
    static loggerService(name: string, data?: any) {
        if (!AppConfig.production) {
            console.log("********************** " + name + " log starts **********************");
            if (_.isObject(data))
                console.log(JSON.stringify(data));
            else
                console.log(data);
            console.log("********************** " + name + " log ends **********************");
        }
    }

    /**
     * 
     * @param path 
     */
    static  getParentPath(selectedNode,path=[]) {
        path.push(selectedNode.label);  
        if(!_.isEmpty(selectedNode.parent)){
            return HelperService.getParentPath(selectedNode.parent,path);
        }else{
            return path.reverse().join("/");
        }
    }

    static generateChildrenArr(moduleArr,keyToPick){
        if(!_.isEmpty(moduleArr)){
           return _.chain(moduleArr)
                   .groupBy('package')
                   .map((value, key)=> {
                       return{
                           package : key,
                           lib: _.pluck(value,keyToPick)
                       }
                   })
                   .value();
        }
        return null;

    }


    static nunjuckRender(path,renderData?:any){
        if(path){
            return nunjucks.render(path,renderData);
        }
        return null;
    }

    static flattenNestedArray(dataArr,dir=''){
        var result = [];
        dataArr.forEach((a)=> {
            a.path = dir+'/'+a.label;
            result.push(a);
            if (Array.isArray(a.children)) {
               result = result.concat(HelperService.flattenNestedArray(a.children,a.path));
            }
        });
        return result;
    }

    static getTemplatePath(type){
        if(type && templatePath.hasOwnProperty(type)){
            return templatePath[type]['template'];
        }
        return null;
        
    }

    static pathIncludes(seekArr,pathObj,type){
        if(!_.isEmpty(pathObj)){
            return seekArr.every((item)=>{
                return pathObj.path.includes(item) && pathObj.type == type;
            })
        }
        return false;
        
    }

    static getStyleProcessing(configObj){
        return configObj.style;
    }
    
    static addDir(arr,seekArr,workspace){
        return arr.map((item)=>{
            return {
                data:item.name,
                label:item.name,
                path:workspace + _.first(seekArr)+'/'+item.name,
                type:APP_VAL.SETUP.DIR,
                children:[]
            }
        })
    }

    static createByType(){

    }
}