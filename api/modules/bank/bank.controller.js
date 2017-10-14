/**
 * Created by Ben on 10/06/2017.
 */


module.exports = (service)=>{
    let transaction = require(`${__dirname}/../transaction`)(service);
    return [{
        /**
         * Event getUserByTag finds an existent user and return back if found
         */
        event: 'bank/recharge',
        worker: (self, args, ack)=> {
            if (!args.quantityCoins ){
                return ack({
                    isValid: false,
                    error: 'No quantityCoins given.'
                });
            }

            let user = self.handshake.session.user;

            transaction.recharge({
                user: user,
                quantityCoins: args.quantityCoins
            })
                .then((transaction)=>{
                    ack({
                        isValid: true,
                        data: transaction
                    })
                })
                .catch((err)=>{
                    coin.remove({_id: coins});
                    ack({
                        isValid: false,
                        error: err
                    })
                })


        },
        public: true
    }]

};