function encriptar(){

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let aviso = document.getElementById("aviso-Enc");
    
    
    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");
    
    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        aviso.src = "./imagenes/encriptado.png";
        parrafo.textContent = "";
        
    } else {
        alert("Debes ingresar algun texto");
        aviso.src ="./imagenes/aviso-Enc.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}