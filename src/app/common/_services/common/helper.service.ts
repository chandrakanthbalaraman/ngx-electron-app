import { AppConfig } from "@env/environment";
import * as _ from 'underscore';

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
}