let inputAdultos = document.getElementById("adultos"),
    inputCriancas = document.getElementById("criancas"),
    inputDuracao = document.getElementById("duracao"),
    btn = document.querySelector(".btn"),
    resultado = document.getElementById("js-resultado");
function calcular() {
    let e = inputAdultos.value,
        t = inputCriancas.value,
        n = inputDuracao.value,
        a = carnePP(n),
        r = a * e + (a / 2) * t,
        c = cervejaPP(n) * e,
        u = ((bebidasPP(n) * e) / 7) * t;
    (resultado.innerHTML = `<p>${r / 1e3} Kg de carne </p>`),
        (resultado.innerHTML += `<p>${Math.ceil(c / 350)} latas de cerveja </p>`),
        (resultado.innerHTML += `<p>${Math.ceil(u / 2e3)} garrafas de 2L </p>`);
}
function carnePP(e) {
    return e >= 4 ? 500 : 300;
}
function cervejaPP(e) {
    return e >= 4 ? 4800 : 1200;
}
function bebidasPP(e) {
    return e >= 4 ? 600 : criancas < 4 ? 200 : 400;
}
function animeContainer() {
    (resultado.style.display = "block"), (resultado.style.opacity = 1);
}
btn.addEventListener("click", calcular),
    btn.addEventListener("click", animeContainer);
