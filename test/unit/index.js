var test = require('tap').test,
    zhhan2Emailer = require(__dirname + '/../../lib/index.js');

zhhan2Emailer(function (err) {
    test('unit', function (t) {
        t.equal(err, null, 'error object is null');
        t.end();
    });
});