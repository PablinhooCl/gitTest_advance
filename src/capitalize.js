 function capitalize(string){
    if(string.length=== 0){
        return null;
    };
    let cap= string[0].toUpperCase() + string.slice(1);
    return cap
}

module.exports = capitalize;
export {capitalize};