function calculator(num1, num2, op){
    let result;
    if(op=== 'sum'){
        result= num1 + num2
    }else if(op=== 'min'){
        result= num1 - num2
    }else if(op=== 'times'){
        result= num1 * num2
    }else if(op=== 'divi'){
        result= num1 / num2
    };
    return result
};
module.exports = calculator;
export {calculator};