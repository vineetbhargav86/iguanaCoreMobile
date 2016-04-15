// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            /*  window.ShellExec.exec("", function(){

             });*/
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })

            .state('setting', {
                url: '/setting',
                abstract: true,
                templateUrl: 'templates/settings.html'
            })

            .state('setting.main', {
                url: '/',
                views: {
                    app: {
                        templateUrl: 'templates/settings/main.html'
                    }
                }
            })

            .state('setting.language', {
                url: '/language',
                views: {
                    app: {
                        templateUrl: 'templates/settings/language.html'
                    }
                }
            })

            .state('setting.coin', {
                url: '/coin',
                views: {
                    app: {
                        templateUrl: 'templates/settings/coin.html'
                    }
                }
            })

            .state('setting.currency', {
                url: '/currency',
                views: {
                    app: {
                        templateUrl: 'templates/settings/currency.html'
                    }
                }
            })

            .state('setting.fee', {
                url: '/fee',
                views: {
                    app: {
                        templateUrl: 'templates/settings/fee.html'
                    }
                }
            })

            .state('setting.backup', {
                url: '/backup',
                views: {
                    app: {
                        templateUrl: 'templates/settings/backup.html'
                    }
                }
            })

            .state('setting.advanced', {
                url: '/advanced',
                views: {
                    app: {
                        templateUrl: 'templates/settings/advanced.html'
                    }
                }
            })

            .state('setting.walletInfo', {
                url: '/wallet-info',
                views: {
                    app: {
                        templateUrl: 'templates/settings/advanced/wallet-info.html'
                    }
                }
            })

            .state('setting.sweepWallet', {
                url: '/wallet-info',
                views: {
                    app: {
                        templateUrl: 'templates/settings/advanced/sweep-wallet.html'
                    }
                }
            })

            .state('setting.exportWallet', {
                url: '/wallet-info',
                views: {
                    app: {
                        templateUrl: 'templates/settings/advanced/export-wallet.html'
                    }
                }
            })

            .state('setting.transaction', {
                url: '/transaction',
                views: {
                    app: {
                        templateUrl: 'templates/settings/advanced/transaction.html'
                    }
                }
            })

            .state('setting.peerManagement', {
                url: '/peerManagement',
                views: {
                    app: {
                        templateUrl: 'templates/settings/advanced/peer-management.html'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

    });
