/**
 * Created by SamSung on 2015-01-21.
 */

define(['app'], function(app){
    app.factory('getUser', function(){
        return function(callback){
            var users = [
                {
                    name : "Park",
                    age : 24
                },
                {
                    name : "Soo",
                    age : 26
                },
                {
                    name : "Hwang",
                    age : 30
                }
            ];
            callback(users);
        };
    });
});