/**
 * Created by Ben on 28/06/2017.
 */
let local = null;
try {
    local = require(__dirname + '/local');
}catch(err){}

module.exports.development  = local || require(__dirname + '/development');
module.exports.production   = require(__dirname + '/production');
module.exports.development.auth         = require(__dirname + '/auth');
module.exports.production.auth         = require(__dirname + '/auth');