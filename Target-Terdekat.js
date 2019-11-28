function targetTerdekat(arr) {
var posisiO = arr.indexOf('o');
var posisiX = arr.indexOf('x',posisiO)
var lastPosisiX = arr.lastIndexOf('x',posisiO)
if(posisiX == -1 && lastPosisiX == -1){
    return '0';
} else if(posisiX == -1 && lastPosisiX != -1){
    return Math.abs(lastPosisiX - posisiO);
} else if(posisiX != -1 && lastPosisiX == -1){
    return Math.abs(posisiX - posisiO);
} else if(posisiX > lastPosisiX){
    return Math.abs(lastPosisiX - posisiO);
} else return Math.abs(posisiX - posisiO);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2