angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.otherwise({ redirectTo: '/fotos'});
});

//Estamos configurando as rotas da aplicação no módulo principal, que é o alurapic.
//$routeProvider.when('/fotos',: Quando a url for /fotos, vai chamar a view partials/principal.html e declarar o controller que está associado aquela view.
//$routeProvider.otherwise({ redirectTo: '/fotos'});: caso tente forçar a url no navegador para uma rota que não existe, será direcionada para rota principal "fotos".
//$locationProvider.html5Mode(true): faz com que o angular trabalhe com html e dessa forma, não precisa colocar a hash na rota do navegador. (Porem o back end precisa estar preparado para isso).
//Para isso é preciso colocar no head do html principal a tag <base href="/">
//como no index.html importamos o script do angular, isso permite acessarmos o objeto global "angular.""
//criando um módulo alurapic e passamos um array de dependencia vazio, porque ainda não depende de nenhum outro módulo.
//minhasDiretivas é um módulo de diretivas, alurapic depende de minhasDiretivas. Por isso a dependencia é injetada.