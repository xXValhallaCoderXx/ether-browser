const currencyKey: any = {
  USD: "en-US",
  JPY: "ja-JP"
}


export const currencyFormat = (currency: string) => {
  return new Intl.NumberFormat(currencyKey[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  })
}