

var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){
        $scope.showMenu = function(){
       $scope.checker= !$scope.checker;
            var styleMenu =document.getElementById('menu');
            if($scope.checker){
               styleMenu.style.backgroundImage ='url(image/content/xs_menu/openMenu.png)'
            }else{
                styleMenu.style.backgroundImage ='url(image/content/xs_menu/UDG_01_xs.png)' 
            }
        }
       
        
          $scope.search = function(){
       $scope.searchNow= !$scope.searchNow;
        }
});

