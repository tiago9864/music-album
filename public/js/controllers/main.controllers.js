
(function() {
  angular.module('music-box') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'AlbumService']; //what tools the MainController function needs

  function MainController($scope, AlbumService){ //$scope is the bridge to the dom
    $scope.boxes = AlbumService.get();
    $scope.createAlbum = createAlbum;
    $scope.deleteAlbum = deleteAlbum;
    $scope.editAlbum = editAlbum;
    $scope.saveAlbum = saveAlbum;

    function createAlbum(newAlbum){
      AlbumService.create(newAlbum);
      $scope.newAlbum = '';
    }
    function deleteAlbum(index){
      AlbumService.delete(index);
    }
    function editAlbum(album){
      Album.isBeingEdited = true;
    }
    function saveAlbum(index, album){
      AlbumService.update(index, album.desc);
      album.isBeingEdited = false;
    }

  }
}());
