/* 
  Buatlah sebuah function yang mencari diagonal kiri dan diagonal kanan pada board tersebut
  contoh : [
    [a, b, c],
    [d, e, f],
    [g, h, i]
  ]
  
*/
function main(board) {
    hasilArr = [[]];
    for(i=0;i<board.length;i++){
         for(j=0;j<board[i].length;j++){
            if(i==j){
                hasilArr[0].push(board[i][j]);
           }
         }
    }    
    hasilArr.push([]);
   for(a=0;a<board.length;a++){
     for(b=board[a].length-1;b>=0;b--){
         if(a+b == board[a].length-1){
            hasilArr[1].push(board[a][b]);
         }
         
         }
     }
    return hasilArr; 
 }



var board1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
]
console.log(main(board1))
// // [ [ 'c', 'e', 'g' ], [ 'a', 'e', 'i' ] ]
var board2 = [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
    ["m", "n", "o", "p"],
  ]
console.log(main(board2))
//  [ [ 'd', 'g', 'j', 'm' ], [ 'a', 'f', 'k', 'p' ] ]
var board3 = [
    ["a", "b"],
    ["c", "d"]
 ]
console.log(main(board3))
// // [ [ 'b', 'c' ], [ 'a', 'd' ] ]