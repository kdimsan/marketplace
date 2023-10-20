export function formatPrice(value: number) {
  const valueFloat = parseFloat(String(value));

  const formattedValue = valueFloat.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
}
