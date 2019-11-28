function balikString(kata){
    var temp1="";
    var lastIndeksKata = kata.length - 1; 
        for(i = lastIndeksKata;i>=0;i--){
        temp1 = temp1 + kata[i];    
        }
        return temp1;
}

console.log(balikString(""));