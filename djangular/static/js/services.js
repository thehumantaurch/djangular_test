(function() {
  var services;

  services = angular.module('pollApp.services', []);

  services.factory('Tasks', function($log, $http, Task) {
    var tasks;
    tasks = {
      all: []
    };
    return {
      fromServer: function(data) {
        var task, _i, _len, _results;
        tasks['all'].length = 0;
        _results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          task = data[_i];
          _results.push(tasks['all'].push(new Task(task)));
        }
        return _results;
      },
      fetch: function() {
        var _this = this;
        return $http({
          method: 'GET',
          url: 'polls/tasks'
        }).success(data)(function() {
          return $log.info("Successfully fetched tasks.");
        }).error(data)(function() {
          return $log.info("Failed to fetch tasks.");
        });
      },
      data: function() {
        return tasks;
      }
    };
  });

}).call(this);
