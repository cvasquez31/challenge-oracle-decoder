const textArea = document.querySelector(".text");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
const informacion = document.querySelector(".mensaje-informacion");
copia.style.display = "none";
mensaje.style.display = "none";

function validarTexto(){
    let texto = textArea.value;
    let textoValido = texto.match(/^[a-z\s]*$/);

    if (!textoValido || texto.trim() === '') { 
        alert("Solo estan permitidas letras minúsculas y sin acentos")
        location.reload();
        return false;
    } return true;
}

function btn_encriptar(){
    if (validarTexto()) {
        encriptar(textArea.value);
        copia.style.display = "initial";
        mensaje.style.display = "initial";
        informacion.style.display = "none";
        document.querySelector(".second-content").classList.add("encripted");
    }
}

function encriptar(cadenaTexto){
    let matrizEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaTexto = cadenaTexto.toLowerCase();

    for (let i= 0; i < matrizEncriptacion.length; i++) {
        if (cadenaTexto.includes(matrizEncriptacion[i][0])) {
            cadenaTexto = cadenaTexto.replaceAll(matrizEncriptacion[i][0],matrizEncriptacion[i][1])
        }
    }
    mensaje.value = cadenaTexto;
    return cadenaTexto;
}


function btn_desencriptar(){
    if (validarTexto()) {
    desencriptar(textArea.value);
    copia.style.display = "initial";
    mensaje.style.display ="initial";
    informacion.style.display = "none";
    }
}

function desencriptar(cadenaTexto){
    let matrizDesencriptacion = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    cadenaTexto = cadenaTexto.toLowerCase();

    for (let i= 0; i < matrizDesencriptacion.length; i++) {
        if (cadenaTexto.includes(matrizDesencriptacion[i][0])) {
            cadenaTexto = cadenaTexto.replaceAll(matrizDesencriptacion[i][0],matrizDesencriptacion[i][1])
        }
    }

    mensaje.value = cadenaTexto;
    return cadenaTexto;
}

function copiar(){
    mensaje.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("¡Mensaje copiado!");
}
