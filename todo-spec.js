const login = require('./login.js');

describe('angularjs homepage todo list', function() {

    it('should have a title', function() {
      login.checkBrowserTitle().then(function(result) {
        expect(result.title).toEqual('Google');
      });
    });

});
