export const classNames = (...classes: (string | undefined | boolean)[]): string => {
  return classes.filter(c => c).join(' ');
}

export const dotlanTransform = (name: string) => name.replace(/ /g, '_');

export const formatNumber = (value: number, options?: Intl.NumberFormatOptions): string => {
  return new Intl.NumberFormat('en-US', options).format(value);
}
