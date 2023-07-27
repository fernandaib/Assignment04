// IMPORT THE MODULE
import {addition, subtraction, multiplication, division} from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let x = parseInt(prompt('Register number, X:'));
let y = parseInt(prompt('Register number, Y:'));
let calculation = prompt('Press key:\n[+] for Addion\n[-] for Subtraction\n[*] for Multiplication\n[/] for Division');


// CALL THE APPROPRIATE FUNCTION
let add = addition(x, y);
let sub = subtraction(x, y);
let mul = multiplication(x, y);
let div = (division(x, y)).toFixed(2);

switch(calculation){
    case '+':
        window.alert(`Operation selected: Addition - ${calculation}`);// CHECK TO SEE WHAT OPERATION THEY'RE USING
        window.alert(`result is ${add}`);
    break;
    case '-':
        window.alert(`Operation selected: Subtraction - ${calculation}`);// CHECK TO SEE WHAT OPERATION THEY'RE USING
        window.alert(`result is ${sub}`);
    break;
    case '*':
        window.alert(`Operation selected: Multiplication - ${calculation}`);// CHECK TO SEE WHAT OPERATION THEY'RE USING
        window.alert(`result is ${mul}`);
    break;
    case '/':
        window.alert(`Operation selected: Division - ${calculation}`);// CHECK TO SEE WHAT OPERATION THEY'RE USING
        window.alert(`result is ${div}`);
    break;
}







