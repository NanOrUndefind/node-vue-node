var router = require('../public/router/router.js');
var disposeController = require('./foreachController');
disposeController = new disposeController();

class analysis {
    constructor (app, router){
        this.resolve(app,router);
    }

    /**
     * url 解析
     * @param app
     * @param router
     */
    resolve(app,router){
        //变量声明
        let temp, routerProtype;
        //路由遍历
        for (temp in router){
            routerProtype = temp.split('^');
            let controller = router[temp]['controller'];
            app[routerProtype[0]](routerProtype[1],function (req, res) {
                if(typeof controller == 'function') {
                    controller.call(router[temp], req, res, app);
                }
                else if(typeof controller == 'string'){
                    disposeController.fetch(controller).call(router[temp], req, res, app);
                }
            })
        }
    }
}


module.exports = function (app) {
    new analysis(app,router);
};
