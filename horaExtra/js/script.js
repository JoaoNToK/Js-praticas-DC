const form = document.querySelector("form");
const resposta = document.querySelector("#resposta");
const salarioTotal = document.querySelector("#salarioTotal");

form.addEventListener("submit", function (event) {
  const salario = parseInt(form.inSalario.value);
  const horaExtra = parseInt(form.inHoraExtra.value);

  const valorHora = salario / 220;
  const valorHoraExtra = valorHora * 0.5;
  const valorHoraExtraFinal = valorHoraExtra + valorHora;
  const saldoSalarioExtra = valorHoraExtraFinal * horaExtra;

  const salarioComHora = saldoSalarioExtra + salario;

  resposta.innerText = `Salario: ${salario}`;
  salarioTotal.innerText = `Salario com hora extra: ${salarioComHora.toFixed(
    2
  )}`;

  event.preventDefault(); // Impede o comportamento padrão do formulário, impedindo que a página seja recarregada.
  event.preventDefault();
});
