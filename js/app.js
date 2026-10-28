let Expressão = "";

function Add(a) {
    Expressão += a;
    document.getElementById("label").textContent = Expressão;
}

function Clear() {
    Expressão = "";
    document.getElementById("label").textContent = "";
}

function Calculate() {
    try {
        let resultado = eval(Expressão);
        document.getElementById("label").textContent = resultado;
        Expressão = String(resultado);
    } catch {
        document.getElementById("label").textContent = "Erro";
        Expressão = "";
    }
}
