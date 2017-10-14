/**
 * Created by Ben on 28/06/2017.
 */

var url = window.location.href;
var arr = url.split("/");

((angular)=>{

    angular.module('data.module')
        .service('$realtimeService', function(){
            var self = this;
            self.io = io;
            self.connect = connect;
            self.connection = null;
            self.disconnect = disconnect;

            function connect(args){
                args = args || {};
                var socketUrl = "ws://" + arr[2];
                if (!self.connection){
                    var headers = {
                        'x-app-id': args.app || '5938944d84c88f1be8064841'
                    };
                    if (args.token){
                        headers['x-session-id'] = args.token;
                    }
                    if (args.username){
                        headers['x-username'] = args.username;
                    }
                    if (args.password){
                        headers['x-password'] = args.password;
                    }
                    if (args.action){
                        headers['x-action'] = args.action;
                    }

                    self.connection = io( {
                        url: args.url || socketUrl,
                        transportOptions: {
                            polling: {
                                extraHeaders: headers
                            }
                        },
                        reconnection: true,
                        reconnectionDelay: 3000,
                        reconnectionDelayMax: 10000,
                        autoConnect: args.autoConnect
                    });
                }

                return self.connection;
            }

            function disconnect(){
                self.connection.disconnect();
                delete self.connection;
            }

        });

})(angular);