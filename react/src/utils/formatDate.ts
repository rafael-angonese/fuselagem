/* Examples

  formatDate(new Date())
  formatDate(new Date(), { dateStyle: 'long' })
  
*/

const formatDate = (
  value: string | Date,
  options?: Intl.DateTimeFormatOptions
) => {
  return new Date(value).toLocaleDateString('pt-br', options)
}

export default formatDate
