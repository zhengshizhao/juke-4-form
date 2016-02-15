'use strict';

juke.factory('PlaylistFactory', function ($http, $state) {

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

	PlaylistFactory.fetchById = function(playlistId){
		return $http.get('/api/playlists/'+ playlistId)
				.then(function(res){
					return res.data;
				})
	}

	PlaylistFactory.addSong = function(song, playlistId){ 
		return $http.post('/api/playlists/'+ playlistId + '/songs')
		.then(function(res){
			var theSong =  res.data;
			return res.data;
		})

	}

	return PlaylistFactory;



});