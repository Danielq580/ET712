//select the element
let squarediv = document.querySelector('.square')
// add an event
squarediv.onclick = function(){
    squarediv.style.backgroundColor = "magenta"
}

//select the element
let btnanimal = document.querySelector(".btnanimal")
let animalsdiv = document.querySelector(".animalsdiv")
//list of animals
let animals = ['fish','dog','turtle','cat','spider']
//add event
btnanimal.onclick = function(){
    animalsdiv.textContent = animals[Math.floor(Math.random()*4)]
}

//Mouse Event
//select the element
let numberdiv = document.querySelector(".numberdiv")
//add a mouse event
numberdiv.onmouseout = function(){
    numberdiv.textContent = Math.ceil(Math.random()*99)
}
//function to randomly pick a number
function pickcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}  
//add a click event
numberdiv.onclick = function(){
    numberdiv.style.backgroundColor = pickcolor()
}

//EXERCISE
//set counter
let counter = 0;
let circle = document.querySelector('.circle');
circle.onmouseout = function(){
    counter++;
    circle.textContent = counter;
}
let resetBtn = document.querySelector('.resetbtn');
resetBtn.onclick = function() {
    counter = 0;
    circle.textContent = counter;
};