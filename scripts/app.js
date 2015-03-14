/*global someFunction */
var angular;
var app = angular.module('mySampleApp', [ 'ngRoute' ]);

app.config([ '$routeProvider', '$locationProvider', function ($routeProvider) {
    'use strict';
	$routeProvider.when('/', {
		templateUrl : 'pages/firstPage.html',
		controller : 'summaryController'
	}).when('/:name', {
		templateUrl : 'pages/secondPage.html',
		controller : 'addEmpController'
		
	}).when('/name/:details', {
        templateUrl : 'pages/thirdPage.html',
        controller : 'firstController'

	}).otherwise({
		redirectTo : '/'
	});
} ]);


app.service('empService', function () {
    'use strict';
    var employeelist = [], addEmployee = function (emp) {
        employeelist.push(emp);
    }, getEmployeeList = function () {
        return employeelist;
    };

    return {
        addEmployee: addEmployee,
        getEmployeeList: getEmployeeList
    };

});



app.controller('summaryController', ['$scope', '$rootScope', '$location', 'empService', function ($scope, $rootScope, $location, empService) {
    'use strict';
   
    $scope.enter = function (path) {$location.path(path); };
    $scope.employeelist = empService.getEmployeeList();
}]);

app.controller('addEmpController', ['$scope', '$rootScope', '$location', 'empService', function ($scope, $rootScope, $location, empService) {
	'use strict';
    var item, newItem;
    
	
    $scope.go = function (path) {$location.path(path); };
 
    /*$scope.employeelist = [{
        'fName': 'Rohit',
        'lName': 'kumar',
        'eId': 'Rohit_Kumar@syntelinc.com',
        'pNumber' : '9015409791'
    }];*/
    
      
//    for (item in localStorage ) {
//        if (localStorage.hasOwnProperty(item)) {
//            newItem = JSON.parse(localStorage[item]);
//            $scope.employeelist.push(newItem);
//        }
//    }
    
    $scope.addRow = function (data) {
	
        var emp = {
            'fName': data.fname,
            'lName': data.lname,
            'eId': data.eid,
            'pNumber' : data.pnumbr
        }, path = "/";
        
        empService.addEmployee(emp);
        $location.path(path);
	//localStorage.setItem( 'item' + localStorage.length, JSON.stringify(emp) );	  
	};


}]);
