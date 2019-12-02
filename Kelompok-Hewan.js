function groupAnimals(animals) {
  var hasilArr = [[]];
  var indexArr = 0;
  var sortedArr = animals.sort();    
  for(i=0;i<sortedArr.length;i++){
      if(i==0){
          hasilArr[indexArr].unshift(sortedArr[i]);
      } else if(i>0 && sortedArr[i][0] == sortedArr[i-1][0]){
              hasilArr[indexArr].unshift(sortedArr[i]);
          } else if(i>0 && sortedArr[i][0] != sortedArr[i-1][0]){
              indexArr = indexArr + 1
              hasilArr.push([]);
              hasilArr[indexArr].unshift(sortedArr[i]);
          }
          }
          return hasilArr;
      }    
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]