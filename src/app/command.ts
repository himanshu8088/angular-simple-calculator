export enum Command { Operator, Operand, Evaluate, Clear, Undefined }
export enum Operation { Add, Subtract, Multiply, Divide }

export function getCommand(value: string): Command {
    let command = Command.Undefined;
    switch (value) {
        case '+':
        case '-':
        case 'x':
        case '/':
            command = Command.Operator;
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            command = Command.Operand;
            break;
        case 'C':
            command = Command.Clear
            break;
        case '=':
            command = Command.Evaluate
            break;
        default:
            command = Command.Undefined
    }
    return command;
}

export function getOperation(value: string): Operation {
    let operation: Operation;
    switch (value) {
        case '+':
            operation = Operation.Add;
            break
        case '-':
            operation = Operation.Subtract;
            break
        case 'x':
            operation = Operation.Multiply;
            break
        case '/':
            operation = Operation.Divide;
            break
    }

    return operation
}
