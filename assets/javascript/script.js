let zero = document.getElementById("zero")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let divide = document.getElementById("divide")
let multiply = document.getElementById("multiply")
let equal = document.getElementById("equal")
let comma = document.getElementById("comma")
let cancel = document.getElementById("cancel")
let result = document.getElementById("result")
let ope = document.getElementById("ope")
let nb2 = document.getElementById("nb2")
let nb1 = document.getElementById("nb1")
let display = nb1

zero.addEventListener("click", function(){
    display.innerText += zero.innerText
})

one.addEventListener("click", function(){
    display.innerText += one.innerText
})

two.addEventListener("click", function(){
    display.innerText += two.innerText
})

three.addEventListener("click", function(){
    display.innerText += three.innerText
})

four.addEventListener("click", function(){
    display.innerText += four.innerText
})

five.addEventListener("click", function(){
    display.innerText += five.innerText
})

six.addEventListener("click", function(){
    display.innerText += six.innerText
})

seven.addEventListener("click", function(){
    display.innerText += seven.innerText
})

eight.addEventListener("click", function(){
    display.innerText += eight.innerText
})

nine.addEventListener("click", function(){
    display.innerText += nine.innerText
})

comma.addEventListener("click", function(){
    display.innerText += comma.innerText
})

plus.addEventListener("click", function(){
    ope.innerText += plus.innerText
})

minus.addEventListener("click", function(){
    ope.innerText += minus.innerText
})

divide.addEventListener("click", function(){
    ope.innerText += divide.innerText
})

multiply.addEventListener("click", function(){
    ope.innerText += multiply.innerText
})

ope.addEventListener("click", function(){
    nb2.innerText += one.innerText
})




