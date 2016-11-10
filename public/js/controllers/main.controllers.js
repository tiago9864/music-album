
(function() {
  angular.module('music-box') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'MusicboxService']; //what tools the MainController function needs

  function MainController($scope, AlbumService){ //$scope is our bridge to the dom
    $scope.boxes = AlbumService.get();
    $scope.createAlbum = createAlbum;
    $scope.deleteAlbum = deleteAlbum;
    $scope.editAlbum = editAlbum;
    $scope.saveAlbum = saveAlbum;

    function createAlbum(newAlbum){
      TodoService.create(newAlbum);
      $scope.newAlbum = '';
    }
    function deleteAlbum(index){
      AlbumService.delete(index);
    }
    function editAlbum(album){
     album.isBeingEdited = true;
    }
    function saveAlbum(index, album){
      AlbumService.update(index, album.desc);
      album.isBeingEdited = false;
    }

  }
}());
