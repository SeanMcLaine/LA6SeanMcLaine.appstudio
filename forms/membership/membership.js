


let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
let name = " " 

btnEnter.onclick=function(){
    name = inptEntry.value
  if (members.includes(name) == true) {
  lblMessage.textContent = name + ", you are already a member" 
  }
else {
  lblMessage.textContent = name + " , you have been added to our list of members"
  members.push(name) 
  }
}



