'use strict';

juke.factory('PlaylistFactory', function ($http) {

	var cachedPlaylists = [];

	var PlaylistFactory = {};

	PlaylistFactory.create = function (obj) {
		return $http.post('/api/playlists', obj)
		.then(function (res) {
			var playlist = res.data;
			cachedPlaylists.push(playlist);
			return playlist;
		})
	}

	PlaylistFactory.getPlaylists = function () {
		return $http.get('/api/playlists')
		.then(function (res) {
            angular.copy(res.data, cachedPlaylists);	
            return cachedPlaylists;
		})
	}

	return PlaylistFactory;



});