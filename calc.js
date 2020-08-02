 function buttonSetting(num){
       document.getElementById('display').value = document.getElementById('display').value + num; 
}
function clearBtn() {
  document.getElementById('display').value = "";
}

function equal() {
      var exp = document.getElementById('display').value;
      if (exp) {
        document.getElementById('display').value = eval(exp);
      }
}



