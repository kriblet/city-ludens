module.exports =  function(connection, mongoose, service){
    let coinSchema = mongoose.Schema({
        name: {type: String, trim: true, index: true, unique: true, sparse: true},
    },{
        timestamps: true
    });

    return {
        model: connection.model('Category', coinSchema),
        public: false
    };
};
