
(function() {
  angular.module('music-box') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'AlbumService']; //what tools the MainController function needs

  function MainController($scope, AlbumService){ //$scope is our bridge to the dom
    $scope.boxes = AlbumService.get();
    $scope.createAlbum = createAlbum;
    $scope.deletedAlbum = deletedAlbum;
    $scope.editAlbum = editAlbum;
    $scope.saveAlbum = saveAlbum;
   

    $scope.$watch(function(){
  return AlbumService.get();
}, function(){
    $scope.albums = AlbumService.get();
});
  function createAlbum(newAlbum){
    AlbumService.create(newAlbum);
    $scope.newAlbum = '';
  }
  function deletedAlbum(index, album){
    AlbumService.delete(index, album);
  }
  function editAlbum(album){
    album.isBeingEdited = true;
  }
  function saveAlbum(index, album){
    AlbumService.update(index, album);//removed the .dec coz data is on the service
    album.isBeingEdited = false;
  }

}
}());
