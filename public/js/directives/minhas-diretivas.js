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
    //o transclude indica para não sobescrever o html principal.  
    //Esta pegando o template da pagina meu-painel
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})
.directive('minhaFoto', function() {
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@' 
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;
})
.directive('meuBotaoPerigo', function() {

    var ddo = {};
    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&'

    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;
});


//nome: '@', @ é usado para passar string
//acao: '&', & é usado para passar uma espressão/função
