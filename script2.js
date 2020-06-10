function ageInDays() {
  var birthYear = prompt("what year were you born?"); //ask for year
  var days = (2020 - birthYear) * 365; //formular to solve days of age
  var h4 = document.createElement("h4"); // create element
  var answer = document.createTextNode("You Are " + days + " days old"); //print out answer
  h4.setAttribute("id", "ageInDays"); //set the h4 an id of ageInDays
  h4.appendChild(answer); //append the h4 to the answer output
  document.getElementById("flex-box-result").appendChild(h4); //join the flex box div to the h4 we created
}
function reset() {
  document.getElementById("ageInDays").remove();
}

function generator() {
  var image = document.createElement("img");
  var div = document.getElementById("flag-generator");
  image.src = "https://media1.giphy.com/media/azkPoG0tuHlnO/source.gif";
  div.appendChild(image);
}

function fullName() {
  var name = document.createElement("p");
  var div = document.getElementById("greeting-box");
  name = document.getElementById("full-name-input");
  div.appendChild(name);
}
