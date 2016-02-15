juke.config(function ($stateProvider) {
    $stateProvider.state('newPlaylist', {
        url: '/playlists/new',
        templateUrl: '/js/playlist/playlist-form.html',
        controller: 'PlaylistCtrl'
    });
});