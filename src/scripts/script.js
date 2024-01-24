const display = document.getElementById("display_numeros");
let expressao = "";

const atualizarDisplay = () => {
  display.value = expressao;
};

const adicionarAoDisplay = (valor) => {
  expressao += valor;
  atualizarDisplay();
};

const limparDisplay = () => {
  expressao = "";
  atualizarDisplay();
};

const seletorDeOperacao = () => {
  try {
    expressao = math.evaluate(expressao.replace("x", "*")).toString();
    atualizarDisplay();
  } catch (error) {
    console.error("Erro ao avaliar expressão:", error);
    expressao = "Erro";
    atualizarDisplay();
  }
};

const calcularRaizQuadrada = () => {
  try {
    expressao = Math.sqrt(math.evaluate(expressao)).toString();
    atualizarDisplay();
  } catch (error) {
    console.error("Erro ao calcular raiz quadrada:", error);
    expressao = "Erro";
    atualizarDisplay();
  }
};

const observarTeclado = (event) => {
  const teclaPressionada = event.key;
  if (/^[0-9]+$/.test(teclaPressionada) || teclaPressionada === ".") {
    adicionarAoDisplay(teclaPressionada);
  } else if (/^[+\-x/]$/.test(teclaPressionada)) {
    adicionarAoDisplay(teclaPressionada);
  } else if (teclaPressionada === "Enter") {
    event.preventDefault();
    seletorDeOperacao();
  }
};

document.addEventListener("keydown", observarTeclado);

const numeros = document.querySelectorAll(".numero");

numeros.forEach((numero) => {
  numero.addEventListener("click", () => {
    adicionarAoDisplay(numero.innerText);
  });
});

document
  .getElementById("botao_limpar")
  .addEventListener("click", limparDisplay);
document
  .getElementById("botao_somar")
  .addEventListener("click", () => adicionarAoDisplay("+"));
document
  .getElementById("botao_potencia")
  .addEventListener("click", () => adicionarAoDisplay("^"));
document
  .getElementById("botao_subtrair")
  .addEventListener("click", () => adicionarAoDisplay("-"));
document
  .getElementById("botao_multiplicar")
  .addEventListener("click", () => adicionarAoDisplay("x"));
document
  .getElementById("botao_dividir")
  .addEventListener("click", () => adicionarAoDisplay("/"));
document
  .getElementById("botao_porcentagem")
  .addEventListener("click", () => adicionarAoDisplay("%"));
document
  .getElementById("botao_raiz")
  .addEventListener("click", calcularRaizQuadrada);
document.getElementById("igual").addEventListener("click", seletorDeOperacao);
