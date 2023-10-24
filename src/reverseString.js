function reverseString(string){
    if(string.length=== 0){
        return null;
    }
    let reversedStr= '';
    let stringer= string.length;
    console.log(reversedStr);
    for(let i= 1; i<= string.length; i++){
        console.log(reversedStr)
        console.log(stringer - i)
        reversedStr= reversedStr+ string[stringer - i];
    }
    return reversedStr;
};
module.exports = reverseString;
export {reverseString};

