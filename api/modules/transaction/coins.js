'use strict';
module.exports = (service)=>{
    return {
        create: create,
        find: find
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

    function find(args){
        let bank = service.models.mongodb.bank;

        return new Promise((resolve, reject)=>{
            bank.find({user: args.user._id }).limit(args.quantityCoins)
                .then(function(coinsDocuments) {
                    let coins = coinsDocuments.map(a => a._id);
                    resolve(coins);
                })
                .catch(function(err) {
                    reject(err);
                });
        })
    }
};

