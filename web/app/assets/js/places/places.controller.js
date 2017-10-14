'use strict';

(function(angular) {
    angular.module('places.module')
        .controller('placesCrudController', ['$scope', '$window', '$aside', '$common',
            function ($scope, $window, $aside, $common) {

                // settings
                $scope.settings = {
                    singular: 'Place',
                    plural: 'Places',
                    cmd: 'Add'
                };
                $scope.item = {
                    place: {}
                };
                $scope.selectedCategory = null;
                $scope.data = [];

                $scope.init = function(){
                    $common.$dataService.find({
                        model:'category',
                        skip: 0,
                        limit: 50
                    })
                        .then(function(res){
                            if (res.isValid){
                                $scope.categories = res.data;
                            }
                            $scope.$apply();
                        })
                        .catch(function(err){
                            console.error(err);
                        });
                    $common.$dataService.emit('place/get', {skip: 0,limit: 50})
                        .then(function(res){
                            console.log(res);
                            if (res.isValid){
                                $scope.data = res.data;
                            }
                            $scope.$apply();
                        })
                        .catch(function(err){
                            console.error(err);
                        })

                };

                $scope.getSubcategories = function(category){
                    console.log("CHANGE ", category);
                    $scope.selectedSubCategory = null;

                    $scope.category = category;
                    $scope.subCategory = null;

                    $scope.subCategories = [];
                    $common.$dataService.find({
                        model:'subCategory',
                        query: {category: category._id},
                        skip: 0,
                        limit: 100
                    })
                        .then(function(res){
                            console.log(res);
                            if (res.isValid){
                                $scope.subCategories = res.data;
                            }
                            $scope.$apply();
                        })
                        .catch(function(err){
                            console.error(err);
                        })
                };

                $scope.changedSubCategory = function(subCategory){
                    $scope.subCategory = subCategory;
                };

                // defining template
                var formTpl = $aside({
                    scope: $scope,
                    template: '/tpl/places/places-form',
                    show: false,
                    placement: 'left',
                    backdrop: false,
                    animation: 'am-slide-left'
                });

                // methods
                $scope.checkAll = function () {
                    angular.forEach($scope.data, function (item) {
                        item.selected = !item.selected;
                    });
                };

                $scope.editItem = function (item) {
                    if (item) {
                        item.editing = true;
                        $scope.item = item;
                        $scope.settings.cmd = 'Edit';
                        $scope.showForm();
                    }
                };

                $scope.viewItem = function (item) {
                    if (item) {
                        item.editing = false;
                        $scope.item = item;
                        $scope.settings.cmd = 'View';
                        $common.findOne({
                            model: 'subCategory',
                            query: {_id: $scope.item.item.subCategory},
                            populate: [{path: 'category', model: 'category'}]
                        }).then(function (res) {
                            console.log(res);
                        }).catch(function (err) {
                            console.error(err);
                        });

                        $scope.showForm();
                    }
                };

                $scope.createItem = function () {
                    var item = {
                        editing: true,
                        place: {}
                    };
                    $scope.item = item;
                    $scope.settings.cmd = 'New';
                    $scope.showForm();
                };

                $scope.saveItem = function () {
                    if ($scope.settings.cmd == 'New') {
                        if (!$scope.item.place.placeType){
                            return;
                        }

                        $scope.item.item.category = $scope.category._id;
                        $scope.item.item.subCategory = $scope.subCategory._id;
                        $common.$dataService.emit('place/save', $scope.item)
                            .then(function (res) {
                                if (res.isValid) {
                                    $scope.item.item.category = $scope.category;
                                    $scope.item.item.subCategory = $scope.subCategory;
                                    $scope.data.push($scope.item);
                                    $scope.item = null;
                                    $scope.hideForm();
                                } else {
                                    console.error(res.error);
                                }
                            })
                            .catch(function (err) {
                                console.error(err);
                            });
                    }
                };

                $scope.remove = function (item) {
                    if (confirm('Are you sure?')) {
                        if (item) {
                            $scope.data.splice($scope.data.indexOf(item), 1);
                        } else {
                            $scope.data = $scope.data.filter(
                                function (item) {
                                    return !item.selected;
                                }
                            );
                            $scope.selectAll = false;
                        }
                    }
                };

                $scope.showForm = function () {
                    angular.element('.tooltip').remove();
                    if ($scope.item.place.location) {
                        $common.$timeout(function () {
                            var latLng = {
                                lat: $scope.item.place.location[1],
                                lng: $scope.item.place.location[0],
                                icon: $scope.createIcon($scope.item.place.placeType)
                            };
                            $scope.$emit('map/marker', latLng, function (marker) {
                                $scope.marker = marker;
                                var latlng = new google.maps.LatLng(parseFloat(latLng.lat), parseFloat(latLng.lng));
                                $common.$rootScope.map.setCenter(latlng);
                            });
                        }, 1000);

                    }
                    formTpl.show();
                };

                $scope.hideForm = function () {
                    formTpl.hide();
                };

                $scope.$on('$destroy', function () {
                    $scope.hideForm();
                });

                $scope.currentIcon = null;
                $scope.createIcon = function (placeType, subCategory) {
                    var icon = '';
                    var color = '';
                    $scope.currentIcon = '';

                    switch (placeType) {
                        case 'INTEREST':
                            icon = 'md-local-attraction';
                            color = 'blue';
                            break;
                        case 'SERVICE':
                            icon = 'md-local-mall';
                            color = 'lime';
                            break;
                        case 'EVENT':
                            icon = 'md-location-history';
                            color = 'red';
                            break;
                    }

                    var html = null;
                    if (icon) {
                        html = '<i class="md ' + icon + ' ' + color + ' lighten-1 icon-color"></i>';
                    }
                    if ($scope.item) {
                        $scope.currentIcon = html;
                        $scope.item.icon = html;
                    }
                    return html;
                };

                $scope.deleteMarker = function () {
                    if ($scope.marker) {
                        $scope.marker.setMap(null);
                        delete $scope.marker;
                    }
                };

                $scope.$on('map/rightclick', function (sender, latLng) {
                    if (!$scope.item.editing) {
                        return;
                    }

                    $scope.deleteMarker();

                    latLng.icon = $scope.currentIcon;
                    $scope.$emit('map/marker', latLng, function (marker) {
                        $scope.marker = marker;
                    });

                    $scope.$emit('map/fromAddress', latLng, function (sender, res) {
                        $scope.item.place.address = res;
                        $scope.item.place.location = [latLng.lng, latLng.lat];
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    })
                });

                $scope.$on('map/search', function (sender, args) {
                    $scope.deleteMarker();
                    $scope.item.place.address = args.address;
                    $scope.item.place.location = [args.lng, args.lat];
                    args.icon = $scope.currentIcon;

                    $scope.$emit('map/marker', args, function (marker) {
                        $scope.marker = marker;
                    });

                })

                $scope.init();
            }]);
})(angular);