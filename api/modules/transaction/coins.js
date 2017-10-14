'use strict';
module.exports = (service)=>{
    return {
        create: create
    };



    function create(args){
        let coin = service.models.mongodb.coin;

        return new Promise((resolve, reject)=>{
            let rawDocuments = [];
            for(let i=0; i < args.quantityCoins; i++){
                rawDocuments.push({});
            }

            coin.insertMany(rawDocuments)
                .then(function(mongooseDocuments) {
                    let coins = mongooseDocuments.map(a => a._id);
                    resolve(coins);
                })
                .catch(function(err) {
                    reject(err);
                });
        })

    }

};

