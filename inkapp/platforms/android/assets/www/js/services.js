angular.module('ink.services', [])

    .factory('QueryTats', function ($http) {
        var factory = {};

        factory.execute = function (filename) {
            return $http.get(filename)
        };

        return factory;
    })

    .factory('QueryArtistById', function ($http) {
        var factory = {};

        factory.execute = function (filename, artistId) {
            return $http.get(filename)
        };

        return factory;
    })

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    });