export const bills: number[] = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];

export interface Currency { cur: string; total: string; clear: string; reset: string }

export const currency: Record<string, Currency> = {
  UAH: {cur:"грн", total: "Разом", clear: "Очистити", reset: 'Скинути'},
  USD: {cur:"$", total: "Total", clear: "Clear", reset: 'Reset'},
  EUR: {cur:"€", total: "Total", clear: "Clear", reset: 'Reset'},
};



