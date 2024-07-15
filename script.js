setInterval(function(){
document.getElementById("t1").innerHTML = new Date().toLocaleString();
},500);

document.getElementById('myButton').addEventListener('click', function() {
  document.getElementById('myDiv').innerHTML = '新しいテキスト';
});
