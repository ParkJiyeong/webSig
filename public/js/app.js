/**
 * Created by SamSung on 2015-01-21.
 */

define([
        'angular',
        'angularAMD',
        'angular-route'
    ], function(angular, angularAMD){
        var app = angular.module('TempProject',['ngRoute']);
        //angular.module('이름',[종속성을 띄고있는 라이브러리 이름])

        app.config(function($routeProvider){
            $routeProvider
                .when('/home',angularAMD.route({
                    templateUrl: 'views/home.html',
                    controller: 'homeCtrl',
                    controllerUrl: 'Controller/homeCtrl'
                }))
                .when('/profile',angularAMD.route({
                    templateUrl: 'views/profile.html',
                    controller: 'profileCtrl',
                    controllerUrl: 'Controller/profileCtrl'
                }))
                .otherwise('/home');
        });

        return angularAMD.bootstrap(app);
    }
);