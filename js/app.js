let Expressão = "";

function Add(a) {
    Expressão = Expressão + a;
    alert(`teste: ${Expressão}`);  
}
function Clear() {
    Expressão = "";
    alert(`teste: ${Expressão}`);
}
function Calculate() {
    try {
        let resultado = eval(Expressão);
        alert(`teste: ${resultado}`);
    } catch {
        alert("error")
    }
}