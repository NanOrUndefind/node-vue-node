/**
 * Created by yuchen on 16/8/25.
 */
class foreachController {

    /**
     * 设置控制器范围
     * @param url
     */
    constructor (url){
        this.setUrl = url?url:'';
        this.objJson = {};
    }

    /**
     * 遍历控制器
     * @param controllerUrlString
     */
    fetch (controllerUrlString){
        if(controllerUrlString) {
            let discriminate = controllerUrlString.split(':');
            return this.findQuoteObj(discriminate[0], discriminate[1]);
        }
    }

    /**
     * 通过url引用控制器
     * @param url
     * @param prototype
     */
    findQuoteObj (url, prototype){

        let _obj = null;
        if(!this.objJson[url]) {
            _obj = require(this.setUrl + url+'.js');
            this.objJson[url] = _obj;
        }
        else{
            _obj = this.objJson[url];
        }

        if(prototype){
            _obj = _obj[prototype];
        }

        return _obj;
    }


}

module.exports = foreachController;
