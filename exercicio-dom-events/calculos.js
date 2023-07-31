/* Desenvolva aqui a rotina */
const base = document.querySelector("#valor_base");
const transporte = document.querySelector("#valor_transporte");
const alimentacao = document.querySelector("#valor_alimentacao");
const receitaTotal = document.querySelector("#valor_receita");

const automovel = document.querySelector("#valor_automovel");
const faltas = document.querySelector("#faltas");
const descontoTotal = document.querySelector("#valor_descontos");

const valorTotal = document.querySelector("#valor_total");
const calcular = document.querySelector("#btn_calcular");

function calcularTotal() {
  var valorBase = parseFloat(base.value);
  var valorTransporte = parseFloat(transporte.value);
  var valorAlimentacao = parseFloat(alimentacao.value);
  receitaTotal.value = (valorBase + valorTransporte + valorAlimentacao).toFixed(
    2
  );

  var descontoAutomovel = parseFloat(automovel.value);
  var descontoFaltas = parseFloat(faltas.value);
  descontoTotal.value = (descontoAutomovel + descontoFaltas).toFixed(2);

  valorTotal.value = (receitaTotal.value - descontoTotal.value).toFixed(2);
}

calcular.addEventListener("click", calcularTotal);
