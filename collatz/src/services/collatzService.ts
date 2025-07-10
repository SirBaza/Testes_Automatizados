export function gerarSequencia(n: number): number[] {
  const sequencia = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    sequencia.push(n);
  }
  return sequencia;
}

export function maiorSequenciaCollatz(limite: number): { numero: number; tamanho: number } {
  let maiorTamanho = 0;
  let numero = 1;
  const cache = new Map<number, number>();

  for (let i = 1; i <= limite; i++) {
    let n = i;
    let passos = 0;

    while (n !== 1 && !cache.has(n)) {
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
      passos++;
    }

    passos += cache.get(n) || 0;
    cache.set(i, passos);

    if (passos > maiorTamanho) {
      maiorTamanho = passos;
      numero = i;
    }
  }

  return { numero, tamanho: maiorTamanho };
}
