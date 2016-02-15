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
		$scope.resetPL();
	}

	$scope.resetPL = function () {
		delete $scope.playlistName;
		$scope.playlistForm.playlistName.$setPristine();
	}

	$scope.resetSG = function () {
		delete $scope.chosenSong;
	}

	SongFactory.getAllSongs()
	.then(function(data){
		$scope.songs = data;
	})

	$scope.addSong = function(chosenSong, playlistId) {
		PlaylistFactory.addSong(chosenSong, playlistId);
		$scope.resetSG();
	}

	PlaylistFactory.getSongList($scope.playlist._id)
  	.then(function (data) {
  		$scope.playlist.songs = data;
  	});






});