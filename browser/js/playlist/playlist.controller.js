juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory,$state,SongFactory) {

	$scope.newPlaylist = {
		name: $scope.playlistName
	}

	$scope.addPlaylist = function (name) {
		$scope.newPlaylist.name = name;
		PlaylistFactory.create($scope.newPlaylist);
		$state.go('playlist');
		$scope.reset();
	}

	$scope.reset = function () {
		delete $scope.playlistName;
		$scope.playlistForm.playlistName.$setPristine();
	}
	SongFactory.getAllSongs()
	.then(function(data){
		$scope.songs = data;
	})
});