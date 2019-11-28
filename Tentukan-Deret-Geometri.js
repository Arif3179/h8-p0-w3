function tentukanDeretGeometri(arr) {
    var hasilBagi = [];
    for(i=arr.length-1;i>0;i--){
        hasilBagi.push(arr[i]/arr[i-1]);
    } var intHasBag = 0;
    var temp1= 0;
    for (j=hasilBagi.length-1;j>0;j--){
        temp1 = hasilBagi[j] - hasilBagi[j-1];
        intHasBag = intHasBag + temp1    
    } if(intHasBag == 0) {
        return true;
    } else return false;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false