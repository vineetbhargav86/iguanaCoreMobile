(function() {
    "use strict";

    angular
        .module('common', [])
        .service('CommonService', function($cordovaBarcodeScanner, $q) {

            return {
                scanQR: function () {

                    var defer = $q.defer();

                    $cordovaBarcodeScanner.scan()
                        .then(function (res) {
                            if (res.format == 'QR_CODE') {
                                defer.resolve(res.text.split('/').pop());
                            } else {

                                defer.reject();
                            }
                        }, function (error) {

                            defer.reject();
                        });

                    return defer.promise;
                }
            };
        });

})();
