type Format = 'short' | 'long'

export function formatCurrency(number: number, format: Format = 'long') {
  const result = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number)

  if (format === 'short') {
    return result.replace('R$', '').trim()
  }

  return result
}
