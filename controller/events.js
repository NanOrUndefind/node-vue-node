/**
 * Created by yuchen on 16/8/26.
 */
let request =  require('request');

module.exports = {
    index: function (req, res) {
        request('http://sf.testapp.org/events', function(error, response, body) {
            body = JSON.parse(body);
            body['data']['view'] = '../events/index.html';
            res.render('template/template.html',body.data);
        })

    },
    calendar: function (req, res) {
        request('http://sf.testapp.org/api/activity/calendar', function(error, response, body) {
            body = JSON.parse(body);
            res.json(body);
        })
    }
}