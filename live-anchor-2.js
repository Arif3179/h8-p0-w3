/**
 * =============
 * Word Triangle
 * =============
 * 
 * Instruction
 * -----------
 * Tulislah kode untuk menampilkan kata dan membentuk segitiga seperti berikut:
 * 
 * Example
 * -------
 * @input = 'yusuf'
 * @output =
 * y
 * yu
 * yus
 * yusu
 * yusuf
 */

var input ='adiel';
 // Write your code here
 function triangle(input){
     var tampungInput="";
     for(var i=0; i < input.length;i++){
        tampungInput = tampungInput + input[i]  
        console.log(tampungInput);
     } return "\n";
 } 

 console.log(triangle('adiel'));
 console.log(triangle('tony'));

