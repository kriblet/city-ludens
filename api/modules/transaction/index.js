'use strict';

module.exports = (service)=>{
    return {
        recharge: require(`${__dirname}/recharge`)(service),
        transfer: null,
        withdraw: null
    };






};
