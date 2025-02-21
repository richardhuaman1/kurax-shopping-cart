export const defaultCurrencySign = 'S/.';

export class NumberUtils {
  private number: number;

  private defaultLocale: string = 'es-PE';

  constructor(value: string | number) {
    this.number = Number(value);
  }

  static toCurrency(value: string | number) {
    const numberUtils = new NumberUtils(value);
    const defaultCurrency = 'PEN';

    return numberUtils.number.toLocaleString(numberUtils.defaultLocale, {
      style: 'currency',
      currency: defaultCurrency,
    });
  }

  static isNumber(value: string) {
    return !Number.isNaN(value) && !Number.isNaN(parseFloat(value));
  }

  static toNumber(value: string) {
    return !Number.isNaN(value) ? Number(value) : null;
  }

  static padWithZero(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }
}
