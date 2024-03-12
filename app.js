
const entradaTexto = document.querySelector(".cuadroEntrada");
const salidaTexto = document.querySelector(".cuadroSalida");


function btnEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value)
    salidaTexto.value = textoEncriptado
    entradaTexto.value = "";
    salidaTexto.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(entradaTexto.value)
    salidaTexto.value = textoEncriptado
    entradaTexto.value = "";
    
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada   
}   

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}   

const $content = document.getElementById('contenidoCopiar'),
      $btn = document.getElementById('btnCopiar');  
$btn.addEventListener('click', e =>{
    $content.select();
    document.execCommand('copy');
})

const $ocultar = document.getElementById('contenidoOcultar'),
      $btncambio = document.getElementById('cambios');  
$btncambio.addEventListener('click', e =>{
    $ocultar.style.display="none";
    
})




