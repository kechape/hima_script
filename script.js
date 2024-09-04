setInterval(function(){
document.getElementById("t1").innerHTML = new Date().toLocaleString();
},500);
setInterval(function(){
document.getElementById("num").innerHTML = x;
},1);
setInterval(function(){
 if(x > 10000000){ 
 document.getElementById("comennt").innerHTML ="これだけの数をたたき出すなんて....まったく";
 } else{
 document.getElementById("comennt").innerHTML ="限界まで押してみな";
 }
},1);


let x = 0;

