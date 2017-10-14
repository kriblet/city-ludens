
/**
 * Created by Ben on 10/06/2017.
 */


module.exports = (service)=>{
    return [{
        event: 'user/data',
        worker: (self, args, ack)=> {
            let user = self.handshake.session.user;
            console.log("user/data", user);
            let bank = service.models.mongodb.bank;

            bank.findOne({user: user._id}, {coinCount:1})
                .then((userBank)=>{
                    console.log("data user bank", userBank);

                    ack({
                        isValid: true,
                        data: {
                            coinCount: userBank ? userBank.coinCount : 0,
                            local: {
                                email: user.local ? user.local.email : null
                            },
                            twitter: {
                                email: user.twitter ? user.twitter.email : null
                            },
                            google: {
                                email: user.google ? user.google.email : null
                            },
                            facebook: {
                                email: user.facebook ? user.facebook.email : null
                            }
                        }
                    })
                })
                .catch((err)=>{
                console.log("ERROR", err);
                    ack({
                        isValid: false,
                        error: err
                    })
                })
        },
        public: true
    },{
        event: 'user/transactions',
        worker: (self, args, ack)=> {
            let user = self.handshake.session.user;
            let transaction = service.models.mongodb.transaction;
            transaction.find({$or:[{receiver: user._id}, {sender: user._id}]}, {coinCount:1, type:1, createdAt: 1})
                .sort('-createdAt').limit(args.limit || 10).skip(args.skip || 0)
                .then((transactions)=>{
                    ack({
                        isValid: true,
                        data: transactions
                    })
                })
                .catch((err)=>{
                    ack({
                        isValid: false,
                        error: err
                    })
                })
        },
        public: true
    }]

};