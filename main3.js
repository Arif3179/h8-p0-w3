function main3(word, material1, material2) {
    var gabungan = material1.concat(material2);
    var splitGabungan = gabungan.split("");
    var splitWord = word.split("");
    var flag = false;
    var jumlahHuruf = 0;
    var kelebihanHuruf = [];
    for(i=0;i<splitWord.length;i++){
        if(splitGabungan.indexOf(splitWord[i]) != -1){
        flag = true;
        } else return false;
    }
    return flag + " huruf tidak dibutuhkan " + kelebihanHuruf;
}

console.log(main3("Haktiv8", "itv8", "aHky"));
console.log(main3("hacktiv8", "kca8", "htivz")) // true
console.log(main3("hacktiv8", "kca8", "htif")) // false
console.log(main3("hacktiv8", "kcva8", "htip")) // true
console.log(main3("hacktiv8", "kca8k", "htivhsq")) // ['k','h'] kelebihan hurufnya
console.log(main3("hacktiv8", "kca8x", "htivwH")) // [] (edited) 