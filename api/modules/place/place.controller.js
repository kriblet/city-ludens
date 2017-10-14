/**
 * Created by Ben on 10/06/2017.
 */


module.exports = (service)=>{

    return [{
        event: 'place/save',
        worker: (self, args, ack) => {
            let user = self.handshake.session.user;
            let place = service.models.mongodb.place;

            if (!args.item) {
                return ack({
                    isValid: false,
                    error: new Error('item parameter is needed')
                });
            }
            if (!args.place) {
                return ack({
                    isValid: false,
                    error: new Error('place parameter is needed')
                });
            }

            let newPlace = new place({
                user: user._id,
                location: args.place.location,
                address: args.place.address,
                placeType: args.place.placeType
            });


            newPlace.save((err) => {
                if (err) {
                    return ack({
                        isValid: false,
                        error: err
                    });
                }

                let itemModel = newPlace.placeType.toLowerCase();
                let item = service.models.mongodb[itemModel];
                args.item.place = newPlace._id;

                let newItem = new item(args.item);
                newItem.save((err) => {
                    if (err) {
                        newPlace.remove();
                        return ack({
                            isValid: false,
                            error: err
                        });
                    }
                    if (!newPlace[itemModel+'s']){
                        newPlace[itemModel+'s'] = [];

                    }
                    newPlace[itemModel+'s'].push(newItem._id);
                    newPlace.save(function(err){
                        if (err){
                            newItem.remove();
                            newPlace.remove();
                            return ack({
                                isValid: false,
                                error: err
                            })
                        }

                        return ack({
                            isValid: true,
                            data: newItem._id
                        })
                    });
                })

            })


        },
        public: true
    },{
        event: 'place/get',
        worker: (self, args, ack)=> {
            let user = self.handshake.session.user;
            let place = service.models.mongodb.place;

            place.find({user: user._id}).limit(args.limit || 100).skip(args.skip || 0)
                .populate([
                    {path:'interests',model:'Interest'},
                    {path:'services',model:'Service'},
                    {path:'helps',model:'Help'},
                    {path:'events',model:'Event'}
                    ])
                .then(function(places){
                    ack({
                        isValid: true,
                        data: places
                    })
                })
                .catch(function(err){
                    service.logger.error(err);
                    ack({
                        isValid: false,
                        error: err
                    })
                })
        },
        public: true
    }]

};