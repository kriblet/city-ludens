((angular)=>{
    angular.module('data.module')
        .service('$dataService',['$realtimeService', function($realtimeService){
            var self = this;

            if (self.conn){
                $realtimeService.disconnect();
            }
            self.conn = $realtimeService.connect();
            self.conn.on('open', ()=>{});
            self.conn.on('welcome', (data)=>{
                self.status = 'online';
                console.log('welcome',data);
            });
            self.conn.on('disconnect', ()=>{
                self.status = 'offline';
            });
            self.conn.on('error', (err)=>{
                console.error('error', err);
            });

            self.emit = function(event, args){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject();
                    }else{
                        self.conn.emit(event, args, function(response){
                            resolve(response);
                        })
                    }
                })
            };
            self.on = function(event, callback){
                if (self.conn){
                    self.conn.on(event, callback);
                }
            };

            self.save = function(model, object){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject('No connections active');
                    }else{
                        self.conn.emit('save', {
                            model: model,
                            data: object
                        }, (response)=>{
                            resolve(response);
                        })
                    }
                })
            };


            self.find = function(args){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject('No connections active');
                    }else{
                        self.conn.emit('find', args, (response)=>{
                            resolve(response);
                        })
                    }
                })
            };

            self.findOne = function(args){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject('No connections active');
                    }else{
                        self.conn.emit('findOne', args, (response)=>{
                            resolve(response);
                        })
                    }
                })
            };

            self.findById = function(args){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject('No connections active');
                    }else{
                        self.conn.emit('findById', args, (response)=>{
                            resolve(response);
                        })
                    }
                })
            };

            self.update = function(model, newData){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject('No connections active');
                    }else{
                        self.conn.emit('findByIdAndUpdate', {model:model, new: newData}, (response)=>{
                            resolve(response);
                        })
                    }
                })
            };

            self.delete = function(model, data){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject('No connections active');
                    }else{
                        self.conn.emit('findByIdAndDelete', {model:model, data: data}, (response)=>{
                            resolve(response);
                        })
                    }
                })
            };

            self.autocomplete = function(args){
                return new Promise(function(resolve, reject){
                    if (!self.conn){
                        reject('No connections active');
                    }else{
                        self.conn.emit('autocomplete', args, (response)=>{
                            resolve(response);
                        })
                    }
                })
            };



        }])
})(angular);