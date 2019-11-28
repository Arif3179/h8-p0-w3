function angkaPalindrome(num) {
var newNum = num + 1;     
while (newNum > 0){
    var angkaStr = newNum.toString();
    var tempHasil ="";
    for(i=angkaStr.length - 1;i>=0;i--){
        tempHasil = tempHasil + angkaStr[i];
        } if(tempHasil == angkaStr){ 
        return newNum;
        } else newNum = newNum + 1  
    }
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001