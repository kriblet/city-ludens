const generateChain = require(`${__dirname}/generateChain`);

module.exports = (service)=>{
    let coins = require(`${__dirname}/coins`)(service);
    return function recharge(args){
        return new Promise((resolve, reject)=>{
            coins.create(args)
                .then((coins)=>{
                    let user = args.user;

                    let bank = service.models.mongodb.bank;
                    let transaction = service.models.mongodb.transaction;
                    let coin = service.models.mongodb.coin;

                    let newTransaction = new transaction({
                        receiver: user._id,
                        coins: coins,
                        coinCount: coins.length,
                        type: 'RECHARGE',
                        currentCoinValue: 1
                    });
                    newTransaction.save((err, doc)=>{
                        if (err){
                            coin.remove({_id: coins});
                            return reject(err);
                        }
                        generateChain(doc, (err, chain)=>{
                            if (err){
                                coin.remove({_id: coins});
                                newTransaction.remove();
                                return reject(err);
                            }
                            newTransaction.chain = chain;
                            newTransaction.save((err)=>{
                                if (err){
                                    coin.remove({_id: coins});
                                    return reject(err);
                                }

                                bank.findOne({user: user._id})
                                    .then((userBank)=>{
                                        if (!userBank){
                                            userBank = new bank({
                                                user: user._id,
                                                coins: coins,
                                                coinCount: coins.length
                                            });
                                            userBank.save((err)=>{
                                                if (err){
                                                    coin.remove({_id: coins});
                                                    newTransaction.remove();
                                                    return reject(err);
                                                }
                                                resolve(newTransaction._id);
                                            })
                                        }else{
                                            userBank.update({$inc: { coinCount: coins.length }, $pushAll: {coins: coins}},{ upsert:true },function(err){
                                                if(err){
                                                    coin.remove({_id: coins});
                                                    newTransaction.remove();
                                                    return reject(err);
                                                }
                                                coin.update({_id: coins}, {prevTransaction: newTransaction._id}, function(err){
                                                    if (err){
                                                        return userBank.update({$dec: { coinCount: coins.length }, $pullAll: {coins: coins}},{ upsert:true },function(err){
                                                            coin.remove({_id: coins});
                                                            newTransaction.remove();
                                                            reject(err);
                                                        });
                                                    }

                                                    resolve(newTransaction._id);
                                                });

                                            });
                                        }
                                    })
                                    .catch((err)=>{
                                        coin.remove({_id: coins});
                                        newTransaction.remove();
                                        service.logger.error(err);
                                        reject(err);
                                    });
                            });
                        });
                    })
                })
                .catch((err)=>{
                    service.logger.error(err);
                    reject(err);
                });
        });
    }

};


