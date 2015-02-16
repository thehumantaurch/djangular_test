(function() {
  var controllers;

  controllers = angular.module('pollApp.controllers', []);

  controllers.controller('questionListController', function($scope, $state, $log, questions) {
    return $scope.questions = [
      {
        question_text: "This is a test"
      }
    ];
  });

  controllers.controller('questionDetailController', function($scope, $state, $log, question) {
    $scope.question = question;
    $scope.voted = false;
    $scope.voteChoice = 0;
    return $scope.vote = function() {
      var choice, _i, _len, _ref;
      _ref = $scope.question.choices;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        choice = _ref[_i];
        if (choice.id === parseInt($scope.voteChoice)) {
          choice.votes += 1;
          $scope.question.totalVotes += 1;
          choice.update();
          break;
        }
      }
      return $scope.voted = true;
    };
  });

  controllers.controller('taskListController', function($scope, $state, $log, tasks) {
    $scope.tasks = [
      {
        task_description: 'Testing 1 2',
        status: false,
        task_description: 'Testing 3 4',
        status: true
      }
    ];
    $scope.newTask = new Task();
    return $scope.save = function() {
      return $scope.newTask.$save().then(function(result) {
        return $scope.tasks.push(result);
      }).then(function() {
        return $scope.newTask = new Task();
      });
    };
  });

}).call(this);
