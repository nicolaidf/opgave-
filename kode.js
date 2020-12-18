let count =(function() {

  let counter = 0;
  return function () {return counter +=1;}

})();

function displaycount(){

  document.getElementById("Lotto").innerHTML = count();
}

//Spam x2
let count2 =(function() {

  let counter2 = 0;
  return function () {return counter2 +=2;}

})();

function displaycount2(){

  document.getElementById("Lotto2").innerHTML = count2();
}
