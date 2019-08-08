import { Injectable } from '@angular/core';




@Injectable({
    providedIn: 'root'
})

export class StorageService {


    constructor() {

    }




    setItemStorage(key, data) {
        const dataType = typeof data;
        if (dataType == 'object') {
            const dataObj = {
                value: data,
                type: dataType
            };
            const stringifyItem = JSON.stringify(dataObj);
            localStorage.setItem(key, stringifyItem);
        } else {
            const dataObj = {
                value: data,
                type: dataType
            };
            const stringifyItem = JSON.stringify(dataObj);
            localStorage.setItem(key, stringifyItem);
        }

    }



    getItemStorage(key) {
        const getItem = JSON.parse(localStorage.getItem(key));
        if (getItem) {
            return getItem['value'];
        } else {
            return null;
        }

    }


    deleteItemStorage(key) {
        localStorage.removeItem(key);
    }

    removeAllStorage() {
        localStorage.clear();
    }
}