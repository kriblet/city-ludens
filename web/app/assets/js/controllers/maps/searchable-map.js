app.controller('SearchableMapController', ['$scope', 'uiGmapGoogleMapApi', 'uiGmapIsReady', '$common', function($scope, uiGmapGoogleMapApi, uiGmapIsReady, $common) {
    $scope.map = {
        center: {
            latitude: 25.399516,
            longitude: -108.703348
        },
        control: {},
        zoom: 8
    };




    uiGmapGoogleMapApi.then(function (maps) {

        $scope.$watch('map.control.getGMap', function(getGMap) {
            if (getGMap) {
                $common.$rootScope.map  = getGMap();
                google.maps.event.addListener($common.$rootScope.map, 'rightclick', function (event) {
                    $scope.$emit('map/rightclick', {lat: event.latLng.lat(), lng: event.latLng.lng()});
                    $scope.$broadcast('map/rightclick', {lat: event.latLng.lat(), lng: event.latLng.lng()});
                });
                google.maps.event.addListener($common.$rootScope.map, 'click', function (event) {
                    $scope.$emit('map/click', {lat: event.latLng.lat(), lng: event.latLng.lng()});
                    $scope.$broadcast('map/click', {lat: event.latLng.lat(), lng: event.latLng.lng()});
                });
                google.maps.event.addListener($common.$rootScope.map, 'dblclick', function (event) {
                    $scope.$emit('map/dblclick', {lat: event.latLng.lat(), lng: event.latLng.lng()});
                    $scope.$broadcast('map/dblclick', {lat: event.latLng.lat(), lng: event.latLng.lng()});
                });
            }
        });

        geocoder = new maps.Geocoder();
        $scope.searchFor = function (query) {
            geocoder.geocode({address: query}, function (results, status) {
                if (status == maps.GeocoderStatus.OK) {
                    var latlng = results[0].geometry.location;
                    $scope.map.control.refresh({latitude: latlng.lat(), longitude: latlng.lng()});
                    $scope.map.control.getGMap().setZoom(15);
                    $scope.$emit('map/search', {address: query, lat: latlng.lat(), lng: latlng.lng()});
                    $scope.$broadcast('map/search', {address: query, lat: latlng.lat(), lng: latlng.lng()});
                }
            });
        };

        $scope.$on('map/fromAddress', function(sender, args, callback){
            $scope.fromAddress(args, callback);
        });

        $scope.fromAddress = function(latlng, callback){
            var latLng = new google.maps.LatLng(parseFloat(latlng.lat),parseFloat(latlng.lng));
            geocoder.geocode({'location': latLng }, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        callback(null, results[1].formatted_address);
                    } else {
                        callback('No results found');
                    }
                } else {
                    callback('Geocoder failed due to: ' + status);
                }
            });

        };

        $scope.$on('map/marker', function(sender, latLnt, callback){
            $scope.createMarker(latLnt, function(marker){
                if (callback){
                    callback(marker);
                }
            });

        });

        $scope.createMarker = function(args, callback){
            var icon = args.icon;
            var latLng = {lat: args.lat, lng: args.lng};

            var marker = null;
            if (!icon) {
                var customIcon = new google.maps.MarkerImage("assets/img/markers/marker.png", null, null, null, new google.maps.Size(30,30));
                marker = new google.maps.Marker({
                    position: latLng,
                    flat: true,
                    icon: customIcon,
                    animation: google.maps.Animation.DROP
                });
            }else {
                marker = new MarkerWithLabel({
                    position: latLng,
                    draggable: true,
                    raiseOnDrag: true,
                    icon: ' ',
                    map: $scope.mapObject,
                    labelContent: icon,
                    labelAnchor: new google.maps.Point(20, 20)
                });
            }

            marker.setMap($common.$rootScope.map);

            if (callback){
                callback(marker);
            }
        }

    });
}]);
