//aqui eu coleto todos os trs da página que desejo manipular
var trs = document.getElementsByTagName('tr');
//agora preciso percorrer eles e executar a minha ação
walksArray(trs, function (tr){
    //eventos de mouse: mouseover, click, dblclick
    tr.addEventListener('click', function (){
        this.setAttribute('bgcolor', '#eee');
    })
})
