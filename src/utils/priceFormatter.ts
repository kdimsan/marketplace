export function formatPrice(value: number) {
  const valueFloat = parseFloat(String(value));

  const formattedValue = valueFloat.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: true,
    currencyDisplay: "symbol",
  });
  return formattedValue;
}

export function totalPrice(value: number, quantity: number) {
  const valueFloat = parseFloat(String(value));

  const finalValue = valueFloat * quantity;

  const formattedFinalValue = formatPrice(finalValue);

  return formattedFinalValue;
}
