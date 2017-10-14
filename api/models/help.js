module.exports =  function(connection, mongoose, service){
    let placeSchema = mongoose.Schema({
        user        : { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} },
        status      : { type: String, enum: ['PENDING', 'DOING', 'DONE', 'CANCELED'] },
        usersGoing  : [ { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} } ],

        category    : { type: mongoose.Schema.Types.ObjectId, ref: 'Category', index:{unique:false} },
        place       : { type: mongoose.Schema.Types.ObjectId, ref: 'Place', index:{unique:false} },


        rewards     : [{
            action          : { type: String, enum: ["HELP"]}
        }]
    },{
        timestamps: true
    });

    return {
        model: connection.model('Help', placeSchema),
        public: false
    };
};
