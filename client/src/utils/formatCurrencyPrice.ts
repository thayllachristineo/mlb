const formatCurrencyPrice = (price: number, currency: string) =>
  new Intl.NumberFormat(navigator.language, {
    style: 'decimal',
    currency,
  }).format(price);

export default formatCurrencyPrice;
