'use strict';

angular
    .module('app.services')
    // .constant('API_KEY', '87de9079e74c828116acce677f6f255b')
    // .constant('BASE_URL', 'http://api.themoviedb.org/3')
    .factory('CastService', dataService);

    function dataService($http){
      let data = { 'getCast': getCast };
      // this.helloConsole = function(){
      //   console.log('HelloService');
      // };
    
      function makeRequest(url, params){
        return $http({
          'url': url,
          'method': 'GET',
          'headers': {
            'Content-Type': 'application/json'
          },
          'cache': true
        })
        .then(function(response){
          return response.data;
        })
        .catch(dataServiceError)
      }

      // this.getCast = function(callback){
      //   $http.get('cast.json')
      //     .then(callback)
      // }
      function getCast(){
        return makeRequest('cast.json');
      }
      // delete $http.defaults.headers.common['X-Requested-With'];
      // this.getOrders = function() {
      //     // $http() returns a $promise that we can add handlers with .then()
      //     return $http({
      //         method: 'GET',
      //         url: 'https://placethemoment.com/wp-json/wc/v2/orders',
      //         params: '',
      //         headers: {'Authorization': 'Token token=Y2tfZjI4NTBhMTNlNWFjMDIzYzNhMzcwZDE1OWUzNTY1ZWNmYjA4YWNmYTpjc19mNWQyMjllODJiYzE3Y2E5Y2E3ZTM4ZWM3MmU2Yjc5MWQyOTU1MTFh'}
      //      });
      //  }
      // this.getOrders = function(callback){
      //   // let auth = Base64.encode('ck_f2850a13e5ac023c3a370d159e3565ecfb08acfa:cs_f5d229e82bc17ca9ca7e38ec72e6b791d295511a');
      //   $http({
      //     method: 'GET',
      //     url: 'http://placethemoment.com/wp-json/wc/v2/orders',
      //     params: '',
      //     headers : {
      //       // "Content-Type":"application/json",
      //       // "Authorization" : "Y2tfZjI4NTBhMTNlNWFjMDIzYzNhMzcwZDE1OWUzNTY1ZWNmYjA4YWNmYTpjc19mNWQyMjllODJiYzE3Y2E5Y2E3ZTM4ZWM3MmU2Yjc5MWQyOTU1MTFh"
      //       'Authorization': 'Token token=Y2tfZjI4NTBhMTNlNWFjMDIzYzNhMzcwZDE1OWUzNTY1ZWNmYjA4YWNmYTpjc19mNWQyMjllODJiYzE3Y2E5Y2E3ZTM4ZWM3MmU2Yjc5MWQyOTU1MTFh'
      //     },
      //   })
      //   .then(callback)
      // }
      
      this.deleteTodo = function(order){
        console.log(`${order.name} has been deleted`);
      }
      
      this.saveTodo = function(submission) {
        let ref = firebase.database().ref('Contacts');
        let pushKey = ref.push().key;
        $scope.formData = $firebaseObject(ref.child(pushKey));
    
        $scope.add = function(){
            $scope.formData.$save().then(() => {
                $state.go('home');
            });
        }
        console.log(`${submission} has been saved`)
      }
      
      this.addTodo = function() {
        console.log(`A new Todo has been created`)
      }

      return data;

      function dataServiceError(errorResponse) {
        $log.error('XHR Failed for ShowService');
        $log.error(errorResponse);
        return errorResponse;
      } 
    }; 