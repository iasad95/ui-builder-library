import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class InputFieldCardService {
  private maskCharacters = new Map([
    ['d', true],
    ['D', true],
  ]);
  public isValidCardNumber(cardNumber: string, cardLength: number): boolean {
    const numbers = new Array(cardNumber.length);
    let currNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
      currNumber = Number(cardNumber[i]);
      if (isNaN(currNumber)) {
        return false;
      }
      if (i % 2 !== 0) {
        numbers[i] = currNumber;
      } else {
        const n = currNumber * 2;
        numbers[i] = n > 9 ? n % 9 : n;
      }
    }
    return numbers.reduce((prevValue, currValue) => prevValue + currValue, 0) % 10 === 0 && cardNumber?.length === cardLength;
  }
  public mask(cardNumber: string, format: string): string {
    const formatLength = format.length;
    let b = 0;
    let maskedOutput = '';
    for (let a = 0; a < cardNumber.length; a++, b++) {
      if (b >= formatLength) {
        b = 1;
      }
      if (this.maskCharacters.get(format[b])) {
        maskedOutput += cardNumber[a];
      } else {
        maskedOutput += `${format[b]} ${cardNumber[a]}`;
        b++;
      }
    }
    return maskedOutput;
  }
  public isMasterCard(cardNumber: string): boolean {
    const mostRecent = Number(cardNumber.substring(0, 4));
    return /^5[1-5]/.test(cardNumber) || (mostRecent >= 2221 && mostRecent <= 2721);
  }
  public isVisaCard(cardNumber: string): boolean {
    return cardNumber.startsWith('4');
  }
  public isAmericanExpressCard(cardNumber: string): boolean {
    return /^3[4|7]/.test(cardNumber);
  }
  public isChinaTUnion(cardNumber: string): boolean {
    return cardNumber.startsWith('31');
  }
  public isChinaUnionPay(cardNumber: string): boolean {
    return cardNumber.startsWith('62');
  }
  public isDinersClubInternational(cardNumber: string): boolean {
    return cardNumber.startsWith('36');
  }
  public isDinersClubCAUS(cardNumber: string): boolean {
    return cardNumber.startsWith('54');
  }
  public isDiscoverCard(cardNumber: string): boolean {
    const range1 = Number(cardNumber.substring(0, 3));
    return cardNumber.startsWith('6011') || cardNumber.startsWith('65') || (range1 >= 644 && range1 <= 649);
  }
  public isDiscoverCardCoUnionPay(cardNumber: string): boolean {
    const range = Number(cardNumber.substring(0, 6));
    return range >= 622126 && range <= 622925;
  }
  public isRuPay(cardNumber: string): boolean {
    const prefixes = ['60', '65', '81', '82', '508'];
    return prefixes.some((prefix) => cardNumber.startsWith(prefix));
  }
  public isRuPayCoJCB(cardNumber: string): boolean {
    return /^35[3|6]/.test(cardNumber);
  }
  public isInterPayment(cardNumber): boolean {
    return cardNumber.startsWith('636');
  }
  public isJCB(cardNumber: string): boolean {
    const range = Number(cardNumber.substring(0, 4));
    return range >= 3528 && range <= 3589;
  }
  public isMaestroUk(cardNumber: string): boolean {
    const prefixes = ['6759', '676770', '5038', '676774'];
    return prefixes.some((prefix) => cardNumber.startsWith(prefix));
  }
  public isMaestro(cardNumber: string): boolean {
    const prefixes = ['5018', '5020', '5038', '5893', '6304', '6759', '6761', '6762', '6763'];
    return prefixes.some((prefix) => cardNumber.startsWith(prefix));
  }
  public isDankurt(cardNumber: string): boolean {
    return cardNumber.startsWith('5019');
  }
  public isDankurtCoVisa(cardNumber: string): boolean {
    return cardNumber.startsWith('4571');
  }
  public isMir(cardNumber: string): boolean {
    const range = Number(cardNumber.substring(0, 4));
    return range >= 2200 && range <= 2204;
  }
  public npsPridnestrovie(cardNumber: string): boolean {
    const range = Number(cardNumber.substring(0, 4));
    return range >= 6054740 && range <= 6054744;
  }
  public isVisaElectron(cardNumber: string): boolean {
    return false;
  }
  public isTroy(cardNumber: string): boolean {
    return cardNumber.startsWith('65') || cardNumber.startsWith('9792');
  }
  public isVerve(cardNumber: string, value): boolean {
    const range1 = Number(cardNumber.substring(0, 6));
    return (range1 >= 506099 && range1 <= 506198) || (range1 >= 650002 && range1 <= 650027) || (range1 >= 507865 && range1 <= 507964);
  }
  public onKeyDown(event: KeyboardEvent, value: string, maxLenth: number): boolean {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || (event.ctrlKey && event.key.toLowerCase() === 'v')) {
      return false;
    }
    if (event.key === 'Backspace') {
      return true;
    }
    if (value.length >= maxLenth || event.key === ' ' || !/\d/.test(event.key)) {
      event.preventDefault();
      return false;
    }
    return false;
  }
}
