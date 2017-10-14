const bcrypt = require('bcrypt-nodejs');
module.exports = function generateChain(args, callback){
    bcrypt.genSalt(5, (salt)=>{
        let data = args.user + args.createdAt.toString() + args.coins.length + args.type + args.currentCoinValue;
        bcrypt.hash(data, salt, null,  callback);
    })
};