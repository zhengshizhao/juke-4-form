'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

  // nothing to see here for now… state transitions happening with ui-sref!
  	PlaylistFactory.getPlaylists()
  	.then(function (data) {
  		$scope.playlists = data;
  	});


});

