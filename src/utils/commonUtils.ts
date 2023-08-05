type getCurrencySymbolProps = {
  country?: string;
};
export const getCurrencySymbol = (props: getCurrencySymbolProps) => {
  const {country = 'IN'} = props || {};

  if (country === 'IN') {
    return ' ₹ ';
  }

  return '₹';
};
