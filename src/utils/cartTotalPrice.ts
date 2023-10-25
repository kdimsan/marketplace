
export interface PricesArray {
  finalPrice: string;
}

export const cartFinalPrice = (prices:PricesArray[]) => {
  const pricesArray = prices.map(price => {
    if(price && typeof price.finalPrice === 'string') {
      const priceWithoutSymbol = price.finalPrice.substring(1); // Remove o "$" do início da string
      return parseFloat(priceWithoutSymbol);
    }
    return 0;
  })
  const totalFinalPrice = pricesArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return totalFinalPrice;
}

