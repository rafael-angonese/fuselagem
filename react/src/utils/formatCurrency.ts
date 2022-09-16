/* Examples
const price = 100

formatCurrency(price)

formatCurrency(price, {
  currencyDisplay: 'none',
})

*/

const formatCurrency = (
  value: number,
  opts: {
    locale?: string
    currency?: string
    style?: string
    currencyDisplay?: string
  } = {}
) => {
  const { locale = 'pt-br', currency = 'BRL', style = 'currency' } = opts
  const stripSymbols = opts.currencyDisplay === 'none'
  let result = new Intl.NumberFormat(locale, {
    currency,
    style,
    maximumFractionDigits: 2,
  }).format(value)

  if (stripSymbols) {
    result = result.split('$')[1].trim()
  }

  return result
}

export default formatCurrency
