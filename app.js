
let listaAmigos = [];
//Verifica se amigo foi digitado corretamente e adiciona na lista
function adicionarAmigo(){
    amigo = document.querySelector('input').value;
    if(listaAmigos.length==0){
       limparResultados();
    }
    if(amigo=='' || amigo == null || amigo === undefined || !contemApenasLetrasOuEspaco(amigo) || verificarEspacos(amigo)){
        alert('Por favor, insira um nome válido');
    }else{
        if(listaAmigos.includes(amigo)){
            alert('Amigo já cadastrado, cadastre outro amigo');
        }else{
            listaAmigos.push(amigo);
            let i = 0 ;
            let texto ='';
            for (i=0;i<listaAmigos.length;i++){
                texto = texto +  '<li>'+ listaAmigos[i] + '</li>';
            }

            preencherCampo('listaAmigos',texto);
            
        }
    }
    limparCampo();
    
}
//Verifica se a pessoa só digitou espaços
function verificarEspacos(str){
    if(str.replace(/ /g,'')==''){
        return true;
    }else{
        return false;
    }

}

//Verificador que evita que digitem números no nome do amigo.
function contemApenasLetrasOuEspaco(str) {
  // A expressão regular /p{L} corresponde a qualquer letra de qualquer idioma (Unicode).
  // O "u" no final é a flag de Unicode, necessária para o /p{L} funcionar.
  // ^ e $ garantem que a string inteira, do início ao fim, corresponda ao padrão.
  // O quantificador + significa "uma ou mais vezes".
  const expressaoRegular = /^[\p{L} ]+$/u;

  return expressaoRegular.test(str);
}

//Limpa o Campo de texto
function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value='';
}
function preencherCampo(id, texto){
    campo = document.getElementById(id).innerHTML=texto;

}

//Sorteia um amigo dentre cadastrado na lista
function sortearAmigo(){
        limparCampo();
    limparResultados();
    if(listaAmigos.length==0){
        alert('Não existe nenhum amigo cadastrado, cadastre amigos para poder sortear');
    }else{
    numeroAleatorio = parseInt(Math.random()*listaAmigos.length);
    texto =  `O amigo secreto sorteado é ${listaAmigos[numeroAleatorio]}`;
    preencherCampo('resultado',texto);
    listaAmigos=[];
    }

}

function limparResultados(){
     preencherCampo('listaAmigos','');
     preencherCampo('resultado','');
}