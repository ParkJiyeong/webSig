/**
 * Created by SamSung on 2015-01-21.
 */

define(['app','Service/getUser'],function(app){
    app.controller('profileCtrl',function($scope,getUser){
        getUser(function(users){
            $scope.users = users;
        });
    });
});