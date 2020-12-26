angular.module('alurapic', ['minhasDiretivas']);
//como no index.html importamos o script do angular, isso permite acessarmos o objeto global "angular.""
//criando um módulo alurapic e passamos um array de dependencia vazio, porque ainda não depende de nenhum outro módulo.
//minhasDiretivas é um módulo de diretivas, alurapic depende de minhasDiretivas. Por isso a dependencia é injetada.