function main(alphabets, forbidden) {
    var hasilArr = [[]]
    var indexArr = 0
    var arrAlpha = alphabets.split("").sort();
    var arrForbid = forbidden.split("").sort();
      for (i=0;i<arrAlpha.length;i++){
          if(i == 0 && arrForbid.indexOf(arrAlpha[i]) === -1){
              hasilArr[indexArr].push(arrAlpha[i]);
          } else if(i>0 && arrForbid.indexOf(arrAlpha[i]) === -1 && arrAlpha[i] == arrAlpha[i-1]){
             hasilArr[indexArr].push(arrAlpha[i]);
          } else if(i>0 && arrForbid.indexOf(arrAlpha[i]) === -1 &&  arrAlpha[i] != arrAlpha[i-1]){
              indexArr = indexArr + 1;
              hasilArr.push([]);
              hasilArr[indexArr].push(arrAlpha[i]);
          } 
         }
         
    for(j=0;j<hasilArr.length;j++){
        hasilArr[j].splice(1,hasilArr[j].length -1,hasilArr[j].length);
    } return hasilArr
}

console.log(main("asdkjwlkhduefakueawdggbmopp", "gw"))
console.log(main("jawidianknjnwadknovnaxzwidj", "diw"))