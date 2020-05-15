angular.module("app.test")
.controller("testingController", function($scope, $http, $window){

    $scope.name = "Testing Controller";

    $scope.object = {
        total: 100,
        page: 1,
        pageSize: 10
    };

    $scope.list = [
        0,1,2,3,4,5,6,7,8,9
    ];

    $scope.search = function(page, pageSize){
        console.log(page, pageSize);

        let start = parseInt(pageSize) * (page);
        let end   = start + parseInt(pageSize);

        $scope.list = [];
        console.log(start, end);
        for (var index = start; index < end; index++){
            $scope.list.push(index);
        }
    }

});