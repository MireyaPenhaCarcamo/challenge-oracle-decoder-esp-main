
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
//creamos objeto con reglas.



var texIngresado  = document.querySelector(".text-input");

var Encriptado  = document.querySelector("#msg");

var desEncriptado  = document.querySelector("#msg");

//boton para encriptar.

var botonencriptar= document.getElementById("btn-encriptar");
botonencriptar.addEventListener("click",function(event){
    event.preventDefault();
    
    mensaje = texIngresado.value;
    textoEncriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    
   
    document.getElementById("msg").value=textoEncriptado;
  
});

//boton para desencriptar
var botondesEncriptar = document.getElementById("btn-desencriptar");
botondesEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    mensajeDos = texIngresado.value;
    textoDesencriptado = mensajeDos.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    
 
    document.getElementById("msg").value = textoDesencriptado;
    

});

 
//funcion para copiar el texto y poder pegarlo en otro lado.
function copiarTexto(){
    var copyText=document.getElementById("msg");
    copyText.select();
    document.execCommand("copy");
    alert("texto copiado ");
   
}  
 function limpiar(){
    document.getElementById("Input-texto").value="";
}
  







