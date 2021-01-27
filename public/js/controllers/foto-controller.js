angular.module('alurapic').controller('FotoController', function($scope, $routeParams, recursoFoto) {
    $scope.foto = {};
    $scope.mensagem = '';

if($routeParams.fotoId) {
    $resource.get({fotoId: $routeParams.fotoId}, function(foto) {
      $scope.foto = foto;
    }, function(erro) {
        console.log(erro);
        $scope.mensagem = 'Não foi possível obter a foto';
    })
}

    $scope.submeter = function() {
        if($scope.formulario.$valid) {
            if($routeParams.fotoId) {
                recursoFoto.update({fotoId: $scope.fotoId}, $scope.foto, function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto alterada com sucesso';
                }), function(erro) {
                    $scope.mensagem = 'Não foi possível alterar a foto';
                    console.log(erro);
                }
            } else {
                recursoFoto.save($scope.foto, function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto incluída com sucesso';
                }, function(erro) {
                    $scope.mensagem = 'Não foi possível incluir a foto';
                    console.log(erro);
                })  
            }       
        }
    }
});