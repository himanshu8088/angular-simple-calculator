import { Component } from '@angular/core';
import { getCommand, getOperation, Command, Operation } from './command';
import { CalculatorService } from './calculator.service';

// selector: the property that reprsent the "CUSTOM-HTML-TAG", using
// whihc the component will be referred in html markup of index.html
// ot HTML Template of other component like User/Custom control
// templateUrl:(external HTML file) the HTML that will be rendered in browser when the
// the component is bootstrap
// template: Inline HTML
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expression: string;
  input: number;
  private output: number;
  private _operation: number;

  constructor(private _calulatorService: CalculatorService) {
    this.init();
  }

  handleCommand(event): void {
    let value = event.target.value;
    let command: Command = getCommand(value);

    switch (command) {
      case Command.Operand:
        this.input = Number(value)
        this.output = this._calulatorService.Calculate(this.output, this.input, this._operation);
        this.expression += value
        break;
      case Command.Operator:
        if (this.expression === '')
          this.expression += this.output;
        this._operation = getOperation(value);
        this.expression += value;
        break;
      case Command.Clear:
        this.init();
        break;
      case Command.Evaluate:
        let result = this.output;
        this.init();
        this.input = this.output = result;
      default: ;
    }
  }

  private init() {
    this.expression = '';
    this.input = 0;
    this.output = 0;
    this._operation = Operation.Add;
  }
}
