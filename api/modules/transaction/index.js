'use strict';

module.exports = (service)=>{
    return {
        recharge: require(`${__dirname}/recharge`)(service),
        transfer: require(`${__dirname}/transfer`)(service),
        withdraw: null
    };






};
