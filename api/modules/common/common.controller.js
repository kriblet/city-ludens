
/**
 * Created by Ben on 10/06/2017.
 */


module.exports = (service)=>{
    return [{
        event: 'find/regex',
        worker: (self, args, ack)=> {
            let user = self.handshake.session.user;

            console.log("find/regex", args);

            if (!args.model ){
                return ack({
                    isValid: false,
                    error: 'No model given.'
                });
            }

            let transformToRegExp = (obj)=>{
                if (obj.constructor === Array){
                    obj.forEach((oI)=>{
                        Object.keys(oI).forEach((oK)=>{
                            oI[oK] = new RegExp(oI[oK], 'i');
                        })
                    })
                }else{
                    Object.keys(obj).forEach((oK)=>{
                        obj[oK] = new RegExp(obj[oK], 'i');
                    })
                }
                return obj;
            };
            args.query = args.query || {};
            Object.keys(args.query).forEach((qK)=>{
                args.query[qK] = transformToRegExp(args.query[qK]);
            });

            args.select = args.select || {};
            args.limit = args.limit || 15;
            args.skip = args.skip || 0;
            args.sort = args.sort || {createdAt: -1};
            args.populate = args.populate || [];

            let model = service.models.mongodb[args.model];
            model.find(args.query)
                .select(args.select)
                .skip(args.skip)
                .limit(args.limit)
                .sort(args.sort)
                .exec((err, results)=>{
                    if (err){
                        console.log("ERROR", err);
                        return ack({
                            isValid: false,
                            error: err
                        })
                    }
                    console.log("find regex", results.length);

                    ack({
                        isValid: true,
                        data: results
                    })
                });
        },
        public: true
    }]

};