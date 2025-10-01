
export async function getRanking(mileValue = 16.50) {
  const res = await fetch(
    `https://api.milhaspix.com/simulate-ranking?mile_value=${mileValue}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Erro ao buscar dados");
  return res.json();
}
