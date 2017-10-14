
let bcrypt   = require('bcrypt-nodejs');

module.exports =  function(connection, mongoose, service){

// define the schema for our user model
    let userSchema = mongoose.Schema({
        local            : {
            email        : {type: String, trim: true, index: true, unique: true, sparse: true},
            password     : {type: String, index: true},
            token            : {type: String, index: true}
        },
        facebook         : {
            id           : {type: String, trim: true, index: true, unique: true, sparse: true},
            token        : {type: String, index: true},
            email        : {type: String, index: true},
            name         : {type: String, index: true}
        },
        twitter          : {
            id           : {type: String, trim: true, index: true, unique: true, sparse: true},
            token        : {type: String, index: true},
            displayName  : {type: String, index: true},
            username     : {type: String, index: true}
        },
        google           : {
            id           : {type: String, trim: true, index: true, unique: true, sparse: true},
            token        : {type: String, index: true},
            email        : {type: String, index: true},
            name         : {type: String, index: true}
        },
        admin            : {type: Boolean, default: false }
    },{
        timestamps: true
    });

// generating a hash
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

// checking if password is valid
    userSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.local.password);
    };


    return {
        model: connection.model('User', userSchema),
        public: false
    };
};
