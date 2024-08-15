const form = document.querySelector("form");
const situacao = document.getElementById("situacao");

form.addEventListener("submit", (e) => {
  const limite = parseFloat(form.inPerimitido.value);
  const velocidadeVeiculo = parseFloat(form.invelCondutor.value);

  if (isNaN(limite) || isNaN(velocidadeVeiculo)) {
    situacao.innerText = "Velocidade inválida";
  } else {
    if (velocidadeVeiculo <= limite) {
      situacao.innerText = "Situação: Sem multa";
    }
    if (velocidadeVeiculo > limite && velocidadeVeiculo <= limite * 1.2) {
      situacao.innerText = "Situação: Multa leve";
    }
    if (velocidadeVeiculo > limite * 1.2) {
      situacao.innerText = "Situação: Multa grave";
    }
    if (velocidadeVeiculo > limite * 2) {
      situacao.innerText = "Situação: Multa gravissima";
    }
  }
  e.preventDefault();
});
