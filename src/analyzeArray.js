class analyzeArray{
    constructor(arr){
        this.average= this.average(arr)
        this.min= this.min(arr)
        this.max= this.max(arr)
        this.length= arr.length
        
    }
    min(arr){
        if(arr.length=== 0){
            return null;
        }
        let min= arr[0];
        for(let i= 1; i< arr.length; i++){
            if(min> arr[i]){
                min= arr[i];
            }
        }
        return min
    }
    max(arr){
        if(arr.length=== 0){
            return null;
        }
        let max= arr[0];
        for(let i= 1; i< arr.length; i++){
            if(max< arr[i]){
                max= arr[i];
            }
        }
        return max
    }
    average(arr){
        let value= arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let cal= value / arr.length;
        return cal
        
    }
}
module.exports = analyzeArray;
export {analyzeArray};