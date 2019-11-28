/**
 * ============
 * Diagon Alley
 * ============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang dapat menampilkan input secara diagonal seperti berikut:
 * 
 * Example
 * -------
 * @input = 'Hacktiv8'
 * @output =
 * H
 *  a
 *   c
 *    k
 *     t
 *      i
 *       v
 *        8
 */

function diagonAlley(str) {
  var temp1 ="";
  for (var i=0;i<str.length;i++){
    var temp2 = str[i]
    console.log(temp1+temp2);
    temp1 = temp1 + " ";
    } return "\n";
  }


  console.log(diagonAlley('yusuf'))
  /*
  y
   u
    s
     u
      f
  */
  console.log(diagonAlley('adiel'))
  /*
  a
   d
    i
     e
      l
  */
  console.log(diagonAlley('tony'))
  /*
  t
   o
    n
     y
  */