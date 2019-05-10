angular
  .module('app.core')
  .directive('helloWorld', helloWorld);

function helloWorld(){
  return {
    template: 'Up-to-Speed with AngularJS!'
  }
};