var cons = require('consolidate');
var request   =  require('request');
let router = {
    'get^/events': {
        controller: '../controller/events:index'
    },
    'get^/api/activity/calendar': {
        controller: '../controller/events:calendar'
    }
}



module.exports =  router;