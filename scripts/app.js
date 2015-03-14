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
		controller : 'firstController'
		
	}).when('/name/:details', {
        templateUrl : 'pages/thirdPage.html',
        controller : 'firstController'

	}).otherwise({
		redirectTo : '/'
	});
} ]);


app.factory('items', function () {
    'use strict';
    var items = [], itemsService = {};
     
    
    itemsService.add = function (item) {
        items.push(item);
    };
    itemsService.list = function () {
        return items;
    };
    
    return itemsService;
});



app.controller('summaryController', ['$scope', 'Service', function ($scope) {
    'use strict';
    
}]);

app.controller('firstController', ['$scope', '$rootScope', '$location', 'Service', function ($scope, $rootScope, $location) {
	'use strict';
    var item, newItem;
    $scope.enter = function (path) {$location.path(path); };
	
    $scope.go = function (path) {$location.path(path); };
 
    $scope.employeelist = [{
        'fName': 'Rohit',
        'lName': 'kumar',
        'eId': 'Rohit_Kumar@syntelinc.com',
        'pNumber' : '9015409791'
    }];

      
    for (item in localStorage ) {
        if (localStorage.hasOwnProperty(item)) {
            newItem = JSON.parse(localStorage[item]);
            $scope.employeelist.push(newItem);
        }
    }
    
    $scope.addRow = function (data) {
	
        var emp = {
            'fName': data.fname,
            'lName': data.fname,
            'eId': data.eid,
            'pNumber' : data.pnumbr
        }, path = "/";
        
       
        $scope.employeelist.push(emp);
        $location.path(path);
	//localStorage.setItem( 'item' + localStorage.length, JSON.stringify(emp) );	  
	};


}]);
