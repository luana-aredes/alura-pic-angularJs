//Quando coloca o segundo parametro(por exemplo um array vazio), significa que estamos criando um módulo
//e indiciando quais são suas dependencias. Nesse caso, estamos querendo usar um módulo já existente.
//Vamos, atraves do modulo alurapic ja criado, então do alurapic vamos criar um controller(modulo).
//O primeiro parametro vamos dar o nome de fotosController(pode ser qualquer nome) e o segundo parametro será uma função que define esse controller.
//convenção e boa prática: Nome do controller começa com letra MAISCULA e usa-se camelCase.

//$scope indica 


    //var promisse = $http.get('v1/fotos')
    // promisse.then(function(retorno) {
    //     $scope.fotos = retorno.data;
    // }).catch(function(error){
    //     console.log(error)
    // })

//Uma característica desse sistema é que toda injeção é feita pelo nome do parâmetro, por isso é muito importante passarmos os parâmetros nomeados de acordo com o serviço ou recurso do Angular que desejamos usar.
angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensgaem = '';

    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    $scope.remover = function(foto) {

        recursoFoto.delete({ fotoId: foto._id }, function() {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto' + foto.titulo + 'foi removida com sucesso';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
        });
    }
});

