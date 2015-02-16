controllers = angular.module('pollApp.controllers', [])

controllers.controller('questionListController', ($scope, $state, $log, questions) ->
  $scope.questions = [
    {question_text: "This is a test"}
  ]
)

controllers.controller('questionDetailController', ($scope, $state, $log, question) ->
  $scope.question = question
  $scope.voted = false
  $scope.voteChoice = 0

  $scope.vote = ->
    for choice in $scope.question.choices
        if choice.id == parseInt($scope.voteChoice)
            choice.votes+=1
            $scope.question.totalVotes+=1
            choice.update()
            break
    $scope.voted = true
 )

controllers.controller('taskListController', ($scope, $state, $log, tasks) ->
  $scope.tasks = [
    task_description: 'Testing 1 2'
    status: false,

    task_description: 'Testing 3 4'
    status: true
  ]

  $scope.newTask = new Task()
  $scope.save = ->
    $scope.newTask.$save().then (result) ->
      $scope.tasks.push result
    .then ->
      $scope.newTask = new Task()

)


