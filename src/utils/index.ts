export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat().format(number);
};

export const CheckHasLetter = (input: string):boolean => {
  return /[a-zA-Z]/.test(input); 
}