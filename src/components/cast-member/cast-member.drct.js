angular
  .module('app.core')
  .directive('castMember', castMember);

function castMember(CastService){
  return {
    controller: controller,
    templateUrl: 'components/cast-member/cast-member.tmpl.html',
    restrict: 'E'
  }
  function controller($scope){
    $scope.cast = null;
    // CastService.getData().then(function(dataResponse) {
    //     $scope.data = dataResponse;
    // });
    CastService.getCast()
      .then(function(response){
      console.log(response.data);
      $scope.cast = response.data;
    });
  }
}