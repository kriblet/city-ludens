const generateChain = require(`${__dirname}/generateChain`);

module.exports = (service)=>{
    let coins = require(`${__dirname}/coins`)(service);
    return function recharge(args){
        return new Promise((resolve, reject)=>{
            coins.find(args)
                .then((coins)=> {
                    let user = args.user;
                    let receiver = args.receiver;

                    //todo: create transaction
                    //todo: remove those coins from user bank
                    //todo: pass those coins to receiver bank


                })
                .catch((err)=>{
                    service.logger.error(err);
                    reject(err);
                });
        });
    }

};


