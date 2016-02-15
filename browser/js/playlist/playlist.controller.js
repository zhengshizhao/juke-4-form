juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {

	$scope.newPlaylist = {
		name: $scope.playlistName
	}

	$scope.addPlaylist = function (name) {
		$scope.newPlaylist.name = name;
		PlaylistFactory.create($scope.newPlaylist);
		$scope.reset();
	}

	$scope.reset = function () {
		delete $scope.playlistName;
		$scope.playlistForm.playlistName.$setPristine();
	}




});