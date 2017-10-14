module.exports =  function(connection, mongoose, service){

    let eventSchema = mongoose.Schema({
        name            : { type: String, index: true },
        information     : { type: String },
        startDate       : { type: Date, required: true },
        endDate         : { type: Date, required: true },
        seats           : { type: Number },
        usedSeats       : { type: Number},
        usersGoing      : { type: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User', index:{unique:false} } ] },


        category    : { type: mongoose.Schema.Types.ObjectId, ref: 'Category', index:{unique:false} },
        subCategory    : { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', index:{unique:false} },
        place           : { type: mongoose.Schema.Types.ObjectId, ref: 'Place', index:{unique:false} },

        rewards     : [{
            action          : { type: String, enum: ["STAY", "CHECKIN"]},
            minTimeMinutes  : Number,
            minTimesAction  : Number
        }]
    },{
        timestamps: true
    });

    return {
        model: connection.model('Event', eventSchema),
        public: false
    };
};
