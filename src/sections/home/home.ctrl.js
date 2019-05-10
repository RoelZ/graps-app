'use strict';

angular
  .module('app.core')
  // .controller('HomeController', function($scope, ShowService) {
  //   $scope.data = null;
  //   ShowService.getData().then(function(dataResponse) {
  //       $scope.data = dataResponse;
  //   });
  // })
  .controller('HomeController', function($scope, CastService){
    this.cast = cast;
    this.cast.member = [];
    
    CastService.getCast()
      .then(function(response){
      console.log(response);
      // this.cast.member = response.member;
    });
  })
  .controller('mainCtrl', function($scope,CastService){
    // $scope.helloWorld = () => console.log('HelloWorld')
    $scope.totalSelection = 0;
    $scope.deathList = {"A": [],"B": [],"C": [],"D": []};
    // $scope.deathList = [];

    $scope.addTo = function(name){
      $scope.totalSelection++;
      let dies = { name };
      $scope.deathList.A.unshift(dies);

      console.log($scope.deathList);
    };

    // $scope.helloConsole = dataService.helloConsole;

    // $scope.todos = dataService.getTodos();    
    // get response wordt pas later opgemaakt en de todos var is hiervoor al geset.
    // om dit te voorkomen, moet van getTodos een functie gemaakt worden.
    
    $scope.data = null;
    // dataService.getTodos().then(function(dataResponse) {
    //     $scope.todos = dataResponse;
    // });

    CastService.getCast(function(response){
      console.log(response.data);
      $scope.cast = response.data;
    });

    // hier mag $index alles zijn
    $scope.deleteTodo = function(order, $index){
      CastService.deleteTodo(order);
      $scope.orders.splice($index, 1); 
    }

    $scope.saveTodo = function(submission){
      CastService.saveTodo(submission)
    }
  })