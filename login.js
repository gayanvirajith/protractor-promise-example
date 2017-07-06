var url = 'https://www.google.lk';
var loadPage = browser.driver.get(url);
var getTitle = browser.driver.getTitle();

module.exports = {
  checkBrowserTitle: function checkBrowserTitle() {
      var deferred = protractor.promise.defer();
      var result = {title: ''};
      loadPage.then(function() {
        getTitle.then(function (title) {
          result.title = title;
          deferred.fulfill(result);
        },
        function(reason) { deferred.reject(reason); });
      },
      function(reason) { deferred.reject(reason); });
      return deferred.promise;
  }
};
