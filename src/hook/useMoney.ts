export const useMoney= (value: string) => {
  const numericValue = typeof value === 'string'
    ? parseFloat(value.replace(/[^\d.-]/g, ''))
    : value;

   const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericValue);

  return formattedValue;
};