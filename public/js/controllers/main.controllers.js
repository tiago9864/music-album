
(function() {
  angular.module('music-box') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'MusicboxService']; //what tools the MainController function needs

  function MainController($scope, MusicboxService){ //$scope is our bridge to the dom
    $scope.boxes = MusicboxService.get();
    $scope.createMusicbox = createMusicbox;
    $scope.deleteMusicbox = deleteMusicbox;
    $scope.editMusicbox = editMusicbox;
    $scope.saveMusicbox = saveMusicbox;

    function createMusicbox(newMusicbox){
      TodoService.create(newMusicbox);
      $scope.newMusicbox = '';
    }
    function deleteMusicbox(index){
      MusicboxService.delete(index);
    }
    function editMusicbox(musicbox){
      musicbox.isBeingEdited = true;
    }
    function saveMusicbox(index, musicbox){
      MusicboxService.update(index, musicbox.desc);
      musicbox.isBeingEdited = false;
    }

  }
}());
