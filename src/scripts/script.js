const somar = () => {
    if(primeiroNumero === "0") {
      definirPrimeiroNumero(String(numeroAtual));
      definirNumeroAtual("");
      definirOperacao("+");
    } else {
      const sum = Number(primeiroNumero) + Number(numeroAtual)
      definirNumeroAtual(String(sum));
      definirOperacao("");
    }
}

const limpar = () => {
    definirNumeroAtual("0");
    definirPrimeiroNumero("0");
    definirOperacao("");
}


const subtrair = () => {
    if(primeiroNumero === "0") {
      definirPrimeiroNumero(String(numeroAtual));
      definirNumeroAtual("");
      definirOperacao("-");
    } else {
      const sum = Number(primeiroNumero) - Number(numeroAtual)
      definirNumeroAtual(String(sum));
      definirOperacao("");
    }
}


const multiplicar = () => {
    if(primeiroNumero === "0") {
      definirPrimeiroNumero(String(numeroAtual));
      definirNumeroAtual("");
      definirOperacao("x");
    } else {
      const sum = Number(primeiroNumero) * Number(numeroAtual)
      definirNumeroAtual(String(sum));
      definirOperacao("");
    }
}


const dividir = () => {
    if(primeiroNumero === "0") {
      definirPrimeiroNumero(String(numeroAtual));
      definirNumeroAtual("");
      definirOperacao("/");
    } else {
      const sum = Number(primeiroNumero) / Number(numeroAtual)
      definirNumeroAtual(String(sum));
      definirOperacao("");
    }
}


const totalizar = () => {
    if(primeiroNumero !== "0" && operacao !== "" && numeroAtual !== "0") {
      switch (operacao) {
        case "+":
          somar();
          break;
        
        case "-":
          subtrair();
          break;

        case "x":
          multiplicar();
          break;  
          
        case "/":
          dividir();
          break;             

        default:
          break;
      }
    }
  }