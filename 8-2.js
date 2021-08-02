// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    let left = 0;
    for(let i=0;i<arr.length;i++){
        left += arr[i];
    }

    let right = 0;
    for(let j=arr.length - 1 ; j>=0; j--){
        left = left - arr[j];
        right+=arr[j];
        if (left == right){
            return true
        }
    }
    return false
}

console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
console.log(balancePoint([1,2,3,2,1])) // FALSE
console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
console.log(balancePoint([2,2])) // TRUE

// ====================================================




// ====================================================

// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE INDEX
// WHERE THE SUM ON EITHER SIDE OF THE INDEX (PIVOT POINT) IS THE SAME
// THINK OF THE INDEX IN THE ARRAY AS THE POINT




function balanceIndex(arr) {

    for(i=1;i < arr.length-1;i++){
        let left=0;
        let right=0;
        for(x=0;x<i;x++){
        left+=arr[x]
        }
        for(y=arr.length-1;y>i;y--){
            right+=arr[y]
            }
        if(left == right){
            return true;
        }
    }
    return false
}   

console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
console.log(balanceIndex([9,9])) // FALSE
console.log(balanceIndex([4,2,2,6])) // TRUE
console.log(balanceIndex([9,1,9])) // TRUE
console.log(balanceIndex([1,8,1,2,3,4])) // TRUE