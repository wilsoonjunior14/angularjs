angular.module("app.test")
.directive("pagination", function(){

    return {
        restrict: 'E',
        template:  '<ul id="pagination" class="pagination">'+
                        '<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_left</i></a></li>'+
                        '<li ng-repeat="pg in pages" class="waves-effect" ng-click="change(pg)">'+
                            '<a ng-if="pg.active" class="red" href="#!">{{pg.page}}</a>'+
                            '<a ng-if="!pg.active" class="" href="#!">{{pg.page}}</a>'+
                        '</li>'+
                        '<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>'+
                    '</ul>'+
                    '<select ng-change="changePageSize()" ng-model="pageSize" style="border: 1px solid black; display: block !important">'+
                        '<option value="10">10</option>'+
                        '<option value="20">20</option>'+
                        '<option value="30">30</option>'+
                    '</select>',
      
        scope:{
            object: "=",
            callback1: "&",
        },

        controller: function($scope){
            $scope.pages    = [];
            $scope.page     = $scope.object.page;
            $scope.pageSize = ""+$scope.object.pageSize+"";
            $scope.total    = $scope.object.total; 

            $scope.init = function(){
                var pages = $scope.total / $scope.pageSize;
                $scope.pages = [];
                for (var i=1; i<=pages; i++){
                    if ($scope.page == i){
                        $scope.pages.push({page: i, active: true});
                    }else{
                        $scope.pages.push({page: i, active: false});
                    }
                }
            }

            $scope.changePageSize = function(){
                $scope.init();
            }

            $scope.change = function(page){
                $scope.page = page.page;
                $scope.init();
                $scope.callback1({page: page.page, pageSize: $scope.pageSize});
            }
            
            $scope.init();


        }
    };

});