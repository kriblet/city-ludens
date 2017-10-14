module.exports =  function(connection, mongoose, service){
    let placeSchema = mongoose.Schema({
        user        : { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} },
        pictures    : { type: String },
        videos      : { type: String },
        location    : { type: [Number], index: '2d'},
        address     : { type: String, index: true },
        placeType   : { type: String, enum: ['INTEREST', 'EVENT', 'SERVICE', 'HELP'] },
        interests    : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interest', index:{unique:false} }],
        events       : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event', index:{unique:false} }],
        services     : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service', index:{unique:false} }],
        helps        : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Help', index:{unique:false} }],

    },{
        timestamps: true
    });

    return {
        model: connection.model('Place', placeSchema),
        public: false
    };
};
