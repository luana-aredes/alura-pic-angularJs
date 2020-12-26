angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
    //Se a diretiva for escrita com camelCase, quando for "chamada" no HTML, precisará ser escrita com ifem(ficará com a escrita diferente nos dois lugares). EX: meu-painel.
    var ddo = {};
    //O ddo é a diretiva configurada, que vamos configurar agora...
//Isso indicará como essa diretiva poderá ser usada. Se é como tag, atributo, comentario(embora pouco usado).
    ddo.restrict = "AE";
    //AE- Attribute Element:  significa que poderá ser usada como atributo(dentro da tag) ou elemento(tag).
    //Poderia ser só "A" ou só "E"
    ddo.scope = {
        titulo: '@'
        //titulo: '@titulo'
        //É no @ que eu capturo o atributo a ser usado no HTML. Ex.: titulo="Cambachirra"
        //Se o nome da propriedade for igual ao nome do atributo, é comum colocarmos somente o "@". O @ significa que o valor que estiver dentro de titulo="Cambachirra", será passado como uma string para o titulo.
    };
    ddo.transclude = true;
    //o transclude indidca para não sobescrever o html principal.  
    //Esta pegando o template da pagina meu-painel
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})

//<meu-painel titulo="Cambachirra"> <meu-painel>
//Do módula podemos criar controllers e tambem diretivas, como foi o caso.