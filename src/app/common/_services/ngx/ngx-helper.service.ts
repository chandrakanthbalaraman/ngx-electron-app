import * as _ from 'underscore';
export class ngxHelperService{
    static optionToCMD(options,config?){
        if(!_.isEmpty(config)){
            let extendOptions = {};
             for(let key in options){
                 if(config.hasOwnProperty(key)){
                    extendOptions[config[key]] = options[key];
                 }else{
                     extendOptions[key] = options[key];
                 }

            }   
            return ngxHelperService.toStrCMD(extendOptions,'--');
        }
        return ngxHelperService.toStrCMD(options,'--');
    }

    static toStrCMD(options,symbol){
        if(!_.isEmpty(options)){
            let str ='';
            for(let key in options){
                str+=`${symbol}${key}=${options[key]} `;
            }
            return str;
        }
        return null;
        
    }
}