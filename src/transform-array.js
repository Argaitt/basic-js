module.exports = function transform(arr ) {
    if (!(Array.isArray(arr))) {
        throw new Error();
    }
    for (let index = 0; index < arr.length; index++) 
    {   
        switch (arr[index]) {
            case "--discard-next":
                arr.splice(index+1,1);
                arr.splice(index,1)
                index--;
                break;
            case "--discard-prev":
                arr.splice(index,1);
                arr.splice(index-1,1)
                break;
            case "--double-next":
                if (index+1 < arr.length) {
                    arr.splice(index+1,0,arr[index+1]);
                    arr.splice(index,1);
                }else{
                    arr.splice(index,1);
                }
                break;
            case "--double-prev":
                if ([index-1] >= 0) {
                    arr.splice(index-1,0,arr[index-1]);
                    arr.splice(index+1, 1); 
                }else{
                    arr.splice(index, 1);
                }
                   
                break;
        
            default:
                break;
        }
    }
    return arr;
};
