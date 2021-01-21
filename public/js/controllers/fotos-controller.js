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
angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensgaem = '';

    //Dessa forma o parametro já é o  conjunto de dados retornados da api (data), não precisa pegar o retorno como feito em baixo.
    //integração com o back-end
    $http.get('v1/fotos')
    .success(function(fotos){
       $scope.fotos = fotos; 
    })
    .error(function(erro){
        console.log(erro);
    })

    $scope.remover = function remover(foto) {
        $http.delete('v1/fotos/' + foto._id)
        .success(function() {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto' + foto.titulo + 'foi removida com sucesso';
        })
        .error(function() {
             console.log(error);
             $scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
        });
     }

});

