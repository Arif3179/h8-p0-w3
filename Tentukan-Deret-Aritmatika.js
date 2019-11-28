function tentukanDeretAritmatika(arr) {
    var interval= [];
    for(i=arr.length-1;i>0;i--){
        interval.push(arr[i]- arr[i-1])
    }
    var bedaInterval = 0;
    var temp1= 0;
    for (j=interval.length-1;j>0;j--){
        temp1 = interval[j] - interval[j-1]
        bedaInterval = bedaInterval + temp1
    } if(bedaInterval == 0){
        return true;
    } else return false;
}

  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false