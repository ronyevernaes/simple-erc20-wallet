export const format = (value: bigint, decimals: number = 2): string => {
  return new Intl.NumberFormat('en-US').format(value);
};
