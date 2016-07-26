var jsonBible = [];
var jsonText = [];
var contadorCapitulos = 0;
var contadorVersiculos = 0;
var capituloAtual = 1;
var select = document.getElementById('listChapters');
var texto = document.getElementById('versicle');
var textVersicle = "";

new Clipboard('.btn');



//algoritmo para o interpretador
var bigtext = document.getElementById('chapter');


function addChapther(){
    contadorCapitulos++;
    jsonBible.push({chapther : contadorCapitulos, versicles : []});
    document.getElementById("demo").innerHTML = JSON.stringify(jsonBible);
    var opt = document.createElement('option');
    opt.value = contadorCapitulos;
    opt.innerHTML = contadorCapitulos;
    select.appendChild(opt);
}

function chagedChapiters(chapter){
    capituloAtual = chapter.value;
    document.getElementById("titleChapter").innerHTML = "Capitulo "+capituloAtual;
}

function addVersicle() {
    contadorVersiculos++;
    size = Object.keys(jsonBible[capituloAtual-1].versicles).length +1 ;
    jsonBible[capituloAtual-1].versicles.push({versicle : size, text : texto.value});
    document.getElementById("demo").innerHTML = JSON.stringify(jsonBible);
    texto.value = "";
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function verificadString(){
    text = bigtext.value; //conteudo do textarea
    text = text.replace(/(\r\n|\n|\r)/gm,"");
    sizeText = text.length; //tamanho do texto
    countVersicles = 0; //conta o numero de versisulos
    var numberVersicle = 0;

    for (var i = 0; i < sizeText; i++) {
        char = text.charAt(i); // verifica o caractere
        nextChar = text.charAt(i+1);
        previousChar = text.charAt(i+1);
        
        if (isNumber(char) == true && isNumber(nextChar) == false){
        //if the actual char is number and the next char is not number ok  
            if(isNumber(previousChar) == false || isNumber(previousChar == true)){
                countVersicles++;

                if(countVersicles > 1){
                    jsonBible[capituloAtual-1].versicles.push({versicle : countVersicles-1, text : textVersicle});
                    //document.getElementById("demo").innerHTML = JSON.stringify(jsonBible);
                }
                textVersicle = ""; //reseta o versisculo toda vez que um numero é encontrado;
            }
             
        } else {
            if(isNumber(char) == false){
                textVersicle += char;
            }     
        }

        if(i+1 == sizeText){
            jsonBible[capituloAtual-1].versicles.push({versicle : countVersicles, text : textVersicle});
            //document.getElementById("demo").innerHTML = JSON.stringify(jsonBible);
            document.getElementById("resultVersicle").innerHTML =  JSON.stringify(jsonBible);
        }
    }
    
    document.getElementById("showdata").innerHTML = countVersicles
}

function copyText() {
    
}

