import { Injectable } from '@angular/core';
import { Operation } from './command';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  Calculate(num1: number, num2: number, operation: Operation): number {
    let result = 0;
    switch (operation) {
      case Operation.Add:
        result = num1 + num2;
        break;
      case Operation.Subtract:
        result = num1 - num2;
        break;
      case Operation.Multiply:
        result = num1 * num2;
        break;
      case Operation.Divide:
        result = num1 / num2;
        break;
    }
    return result;
  }
}
