juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $state, SongFactory, thePlaylist) {
	//resolve (at state) gets data from db async makes it available as a variable to a controller
	$scope.playlist = thePlaylist;

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
		delete $scope.songChoices;
		$scope.playlistForm.playlistName.$setPristine();
	}

	SongFactory.getAllSongs()
	.then(function(data){
		$scope.songs = data;
	})

	// $scope.addSong = PlaylistFactory.addSong;

	$scope.addSong = function(chosenSong, playlistId) {
		PlaylistFactory.addSong(chosenSong, playlistId);
		$scope.reset();
	}

	PlaylistFactory.getSongList($scope.playlist._id)
  	.then(function (data) {
  		$scope.playlist.songs = data;
  	});






});