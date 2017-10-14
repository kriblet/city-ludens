module.exports =  function(connection, mongoose, service){
    let bankSchema = mongoose.Schema({
        user        : { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} },
        interest    : { type: mongoose.Schema.Types.ObjectId, ref: 'Interest', index:{unique:false} },
        event       : { type: mongoose.Schema.Types.ObjectId, ref: 'Event', index:{unique:false} },
        service     : { type: mongoose.Schema.Types.ObjectId, ref: 'Service', index:{unique:false} },
        help        : { type: mongoose.Schema.Types.ObjectId, ref: 'Help', index:{unique:false} },

        coins       : [ { type: mongoose.Schema.Types.ObjectId, ref: 'Coin', index:{unique:false} } ],
        coinCount   : { type: Number }
    },{
        timestamps: true
    });

    return {
        model: connection.model('Bank', bankSchema),
        public: false
    };
};
