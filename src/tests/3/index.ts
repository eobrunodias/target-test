console.log(`----------------- Teste (3) ------------------`);

// Importa o JSON (Mock) do arquivo faturamento.json
import faturamento from "./faturamento.json";

// Criando a tipagem do objeto contido no JSON
interface FaturamentoDiario {
  dia: number;
  valor: number;
}

// Filtra os dias com faturamento maior que 0 (ignora finais de semana e feriados)
const diasComFaturamento = faturamento.filter(
  (dia: FaturamentoDiario) => dia.valor > 0
);

// Calcula o menor e maior valor de faturamento
const menorFaturamento = Math.min(
  ...diasComFaturamento.map((dia: FaturamentoDiario) => dia.valor)
);
const maiorFaturamento = Math.max(
  ...diasComFaturamento.map((dia: FaturamentoDiario) => dia.valor)
);

// Calcula a média mensal
const mediaMensal =
  diasComFaturamento.reduce(
    (acc: number, dia: FaturamentoDiario) => acc + dia.valor,
    0
  ) / diasComFaturamento.length;

// Calcula o número de dias com faturamento superior à média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(
  (dia: FaturamentoDiario) => dia.valor > mediaMensal
).length;

console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(
  `Número de dias com faturamento acima da média: R$ ${diasAcimaDaMedia}`
);

console.log(`----------------------------------------------`);
