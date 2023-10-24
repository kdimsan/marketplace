export function formatPrice(value: number) {
  const valueFloat = parseFloat(String(value));

  const formattedValue = valueFloat.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formattedValue;
}

export function totalPrice(value: number, quantity: number) {
  const valueFloat = parseFloat(String(value));

  const finalValue = valueFloat * quantity;

  const formattedFinalValue = formatPrice(finalValue);

  return formattedFinalValue;
}
