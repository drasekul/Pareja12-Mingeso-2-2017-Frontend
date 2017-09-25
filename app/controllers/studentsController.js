
var studentApp = angular.module('studentApp',[]);
studentApp.controller('getStudents',function($scope,$http){
    $scope.students=[];
    $http({
        method: 'GET',
        url: 'http://localhost:1414/students'
    }).then(function(data){
        $scope.students = data.data._embedded.students;
    });

});

studentApp.controller(addStudent, function($scope, $http){

});