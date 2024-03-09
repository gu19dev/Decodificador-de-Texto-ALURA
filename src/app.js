function criptografar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function descriptografar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function executar(acao) {
    var texto = document.getElementById("text-colar").value.toLowerCase();
    var resultado;

    if (acao === "criptografar") {
        resultado = criptografar(texto);
    } else {
        resultado = descriptografar(texto);
    }

    document.getElementById("text-copiar").value = resultado;
}

function copiar() {
    var resultado = document.getElementById("text-copiar");
    resultado.select();
    resultado.setSelectionRange(0, 99999); /* Para dispositivos móveis */
    document.execCommand("copy");
    alert("Texto copiado!");
}