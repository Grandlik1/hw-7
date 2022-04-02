const operation = prompt ('Select an operation: sum , sub , multi , div ');
const num1 = +prompt('First number')
const num2 = +prompt('Second number')
switch (operation) {
    case 'sum':
        alert (num1 + num2);
        break;
    case 'sub':
        alert (num1 - num2);
        break;
    case 'multi':
        alert (num1 / num2);
        break;
    case 'div':
        alert (num1 * num2);
        break;
    default:
        alert( 'There is no such operation' );
}
