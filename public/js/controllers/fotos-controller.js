//Quando coloca o segundo parametro(por exemplo um array vazio), significa que estamos criando um módulo
//e indiciando quais são suas dependencias. Nesse caso, estamos querendo usar um módulo já existente.
//Vamos, atraves do modulo alurapic ja criado, então do alurapic vamos criar um controller(modulo).
//O primeiro parametro vamos dar o nome de fotosController(pode ser qualquer nome) e o segundo parametro será uma função que define esse controller.
//convenção e boa prática: Nome do controller começa com letra MAISCULA e usa-se camelCase.

//$scope indica 
angular.module('alurapic').controller('FotosController', function($scope) {

    $scope.fotos = [
        {
            titulo: 'Leão',
            url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },

        {
            titulo: 'Leão2',
            url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },

        {
            titulo: 'Leão3',
            url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        }
    ];

});