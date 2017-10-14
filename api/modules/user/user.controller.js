
/**
 * Created by Ben on 10/06/2017.
 */


module.exports = (service)=>{
    return [{
        event: 'user/data',
        worker: (self, args, ack)=> {
            let user = self.handshake.session.user;

            let bank = service.models.mongodb.bank;

            bank.findOne({user: user._id}, {coinCount:1})
                .then((userBank)=>{
                    user.coinCount = 0;
                    if (userBank){
                        user.coinCount = userBank.coinCount;
                    }

                    ack({
                        isValid: true,
                        data: {
                            coinCount: user.coinCount,
                            local: {
                                email: user.local.email
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