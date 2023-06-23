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

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let aviso = document.getElementById("aviso-Enc");

    let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");

        if(texto.length != 0){
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            aviso.src = "./imagenes/desencriptado.png";
            parrafo.textContent = "";

        }else{
            alert("Debes ingresar algun texto");
            aviso.src ="./imagenes/aviso-Enc.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado"
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

        }
}

function copiarTexto() {
    const campoTexto = document.getElementById("texto");
    const texto = campoTexto.value;
  
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("Texto copiado al portapapeles.");
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  }