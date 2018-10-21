const currencyKey: any = {
  USD: "en-US",
  JPY: "ja-JP"
};

export const currenySymbol = (currency: string) => {
  let symbol;
  switch (currency) {
    case "SGD":
    case "USD":
      symbol = "$";
      break;
    case "GBP":
      symbol = "£";
      break;
    case "CNY":
      symbol = "¥";
      break;
    case "JPY":
      symbol = "¥";
    case "EUR":
      symbol = "€";
      break;
    case "KRW":
      symbol = "₩";
  }
  return symbol;
};

export const currencyFormat = (currency: string) => {
  return new Intl.NumberFormat(currencyKey[currency], {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  });
};
