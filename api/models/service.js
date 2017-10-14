module.exports =  function(connection, mongoose, service){
    let serviceSchema = mongoose.Schema({
        name        : { type: String },
        information : { type: String },
        reviews     : [{
            user        : { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} },
            comment     : String,
            rate        : { type: Number, min: 1, max: 5 },
            createdAt   : { type: Date, default: Date.now}
        }],
        promotions  : [{
            title       : String,
            description : String,
            pictures    : [ String ],
            validAt     : { type: Date }
        }],
        products    : [ String ],
        category    : { type: mongoose.Schema.Types.ObjectId, ref: 'Category', index:{unique:false} },
        subCategory    : { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', index:{unique:false} },
        place       : { type: mongoose.Schema.Types.ObjectId, ref: 'Place', index:{unique:false} },

        rewards     : [{
            action          : { type: String, enum: ["STAY", "CHECKIN", "BUY"]},
            minTimeMinutes  : Number,
            minTimesAction  : Number
        }]
    },{
        timestamps: true
    });

    return {
        model: connection.model('Service', serviceSchema),
        public: false
    };
};
