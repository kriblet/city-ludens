module.exports = (self, condition, callback)=> {
    callback = callback || function () {}
    return new Promise((resolve, reject)=>{
        self.findOne(condition, (err, result) => {
            if (err){
                reject(err);
                return callback(err);
            }else if(result) {
                resolve(result);
                return callback(null, result);
            }

            self.create(doc, (err, result) => {
                if (err){
                    reject(err);
                }else{
                    resolve(result);
                }

                return callback(err, result);
            });
        });
    });

};