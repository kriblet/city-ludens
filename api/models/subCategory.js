module.exports =  function(connection, mongoose, service){
    let coinSchema = mongoose.Schema({
        name        : { type: String, index: true},
        category    : { type: mongoose.Schema.Types.ObjectId, ref: 'Category', index:{unique:false} },
        tags        : { type: [String], index: true}
    },{
        timestamps: true
    });

    return {
        model: connection.model('SubCategory', coinSchema),
        public: false
    };
};
