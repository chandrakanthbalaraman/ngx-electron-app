import { Injectable } from '@angular/core';
var mkdirp = require('mkdirp');

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    makeDir(dirData) {
        return new Promise((resolve, reject) => {
            mkdirp(dirData, (err, resp) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(resp);
                }
            });
        })
    }
}