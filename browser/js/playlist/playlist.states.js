juke.config(function ($stateProvider) {
    $stateProvider.state('newPlaylist', {
        url: '/playlists/new',
        templateUrl: '/js/playlist/playlist-form.html',
        controller: 'PlaylistCtrl'
    });
    $stateProvider.state('playlist', {
    	url:'/playlists/:playlistId',
        templateUrl:'/js/playlist/playlist.html',
        controller: 'PlaylistCtrl',
        resolve: {
        	thePlaylist: function(PlaylistFactory,$stateParams){
        		return PlaylistFactory.fetchById($stateParams.playlistId);

        	}
        }
    })
});