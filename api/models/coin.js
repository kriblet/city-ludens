module.exports =  function(connection, mongoose, service){
    let coinSchema = mongoose.Schema({
        prevTransaction     : { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', index:{unique:false} },
    },{
        timestamps: true
    });

    return {
        model: connection.model('Coin', coinSchema),
        public: false
    };
};
