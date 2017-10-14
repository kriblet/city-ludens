module.exports =  function(connection, mongoose, service){
    let transactionSchema = mongoose.Schema({
        sender              : { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} },
        receiver            : { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} },
        coins               : [ { type: mongoose.Schema.Types.ObjectId, ref: 'Coin', index:{unique:false} }],
        coinCount           : Number,
        currentCoinValue    : Number,
        prevTransaction     : { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', index:{unique:false} },
        chain               : { type: String, index: true },
        blockChain          : { type: String, index: true },
        type                : { type: String, enum: ['RECHARGE', 'TRANSFER', 'WITHDRAW']}
    },{
        timestamps: true
    });

    return {
        model: connection.model('Transaction', transactionSchema),
        public: false
    };
};
