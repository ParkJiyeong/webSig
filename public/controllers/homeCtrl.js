/**
 * Created by SamSung on 2015-01-21.
 */

define(['app'],function(app){
    app.controller('homeCtrl',function($scope){
        $scope.name = "jiyeong";  // scope는 변수들 같은 name space
        $scope.name2 = "jaehwan";
    });
});