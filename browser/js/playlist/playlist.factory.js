'use strict';

juke.factory('PlaylistFactory', function ($http, $state) {

	var cachedPlaylists = [];

	var cachedSongList = [];

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
		return $http.post('/api/playlists/'+ playlistId + '/songs', {song:song})
		.then(function(res){
			var theSong =  res.data;
			// console.log(theSong)
			cachedSongList.push(theSong);
			return theSong;
		})
	}

	PlaylistFactory.getSongList = function (playlistId) {
		return $http.get('/api/playlists/'+ playlistId + '/songs')
		.then(function (res) {
			angular.copy(res.data, cachedSongList);
			return cachedSongList
		})
	}

	return PlaylistFactory;



});