/*
Pick two numbers and inoput them into the calulator, then pick the function that you want to perfoirm 
between the two numbers you entered and then press enter
*/




btnMultiply.onclick=function() {
  let name = inpt.inptnamec.value
  let number1 =  parseInt(inpt1.value)
  let number2 =  parseInt(inpt2.value)
  let product = number1 * number2 
  lblresults.textcontent = "Hey" + name + ", your two numbers multiplied together are" + product 
}


btnAdd.onclick=function(){
  let name = inpt.inptnamec.value
  let number1 =  parseInt(inpt1.value)
  let number2 =  parseInt(inpt2.value)
  let sum = number1 + number2 
  lblresults.textcontent = "Hey" + name + ", your two numbers added together are" + sum 
}
