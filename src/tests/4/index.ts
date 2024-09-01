console.log(`----------------- Teste (4) ------------------`);

interface FaturamentoPorEstado {
  estado: string;
  valor: number;
}

const faturamentoMensal: FaturamentoPorEstado[] = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

// Calcula o faturamento total
const faturamentoTotal = faturamentoMensal.reduce(
  (acc, estado) => acc + estado.valor,
  0
);

// Calcula o percentual de cada estado e exibe o resultado
faturamentoMensal.forEach((estado) => {
  const percentual = (estado.valor / faturamentoTotal) * 100;
  console.log(`${estado.estado}: ${percentual.toFixed(2)}%`);
});

/*
Resultado:

SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98%
*/

console.log(`----------------------------------------------`);
