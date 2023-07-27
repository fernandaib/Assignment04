//STEP 1
// let x = parseFloat(prompt('question 01: Calculate Half\n-Enter a number')); 
function halfNumber(x) {       
    let result = x/2;   
    console.log(`Half of ${x} is ${result}`)
    
};
halfNumber(5);


//STEP 2
// let y = parseFloat(prompt('question 02 Calculate square\n-Enter a number')); 
function squareNumber(y) {
    let result = y*y;
    console.log(`The result of squaring the number ${y} is ${result}`)
}
squareNumber(3);

//STEP 3
function percentOf(a,b) {
    // let a = parseFloat(prompt('question 03 Calculate percent %\n-Enter a number A ')); 
    // let b = parseFloat(prompt('question 03 Calculate percent %\n-Enter a number B ')); 
    let result = (a/b)*100;
    console.log(`The result of squaring the number ${a} is ${result}% of ${b}`)
}
percentOf(2, 4);

//STEP 4
function findModulus(c,d){
    // let c= parseInt(prompt('question 04 Calculate modulus\n-Enter a DIVIDEND number'));
    // let d= parseInt(prompt('question 04 Calculate modulus\n-Enter a DIVISOR number'));
    let result = c%d;
    console.log(`${result} is the modulus of ${c} and ${d}`)
}
findModulus(10,4);

//STEP 5
const myArray = [];
let qtyItems = parseInt(prompt('Enter the list lenght'));

function sumItems(){
    
    for (let i=0; i<qtyItems; i++){
        myArray.push(parseInt(prompt('Enter a number for the array')));   
    }
    console.log(myArray);

    let sum =0;
    for(let i=0; i<myArray.length; i++){
        sum +=myArray[i];
    }
    console.log(sum)
}
sumItems();







