function pasanganTerbesar(num) {
    var strNum = num.toString();
    pasAngka = [];
    for(var i=0;i<strNum.length;i++){
        var j = i + 2;
        pasAngka.push(strNum.slice(i,j));
        pasAngka.sort(function(a, b){return a - b});
    } return pasAngka[pasAngka.length-1];
 }

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99