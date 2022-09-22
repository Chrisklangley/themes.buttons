console.log("Hello World")
let count = 0
const counterText = document.querySelector('#counter')
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')

const setCounterDisplay = () =>{
    counterText.textContent = count
}

const increase = () =>{
    count++
   setCounterDisplay()
}

const minus = () =>{
    count--
    setCounterDisplay()
}
const setBack = ()=> {
    count = 0
    setCounterDisplay()
}






minusBtn.addEventListener('click', minus)
resetBtn.addEventListener('click',setBack)
plusBtn.addEventListener('click', increase)

// console.log(1, fbbtn)

// ////////////////////////////////////////////////////////////////////

const fbbtn = document.querySelector('.theme-buttons')

// const inspectingEvent = (e) =>{
//     console.log(2, e.target)

// }

// fbbtn.addEventListener('click', inspectingEvent)


const themeBtn =document.querySelectorAll('.theme-buttons')


console.log(themeBtn)

const selectTheme = (e) => {
    const theme = e.target.textContent

    document.querySelector('body').className =theme
    document.querySelector('main').className =theme
const buttons =document.querySelectorAll('button')

for(let i = 0; i <buttons.length;i ++){
    buttons[i].className = theme
}

}
for(let i = 0;i < themeBtn.length;i++){
    themeBtn[i].addEventListener('click', selectTheme)
}
///////////////////////////////////////////////////////////////

const inputField = document.querySelector("#foodinput")
const foodbtn = document.querySelector('#foodbtn')
const foodList = document.querySelector('#food-list')

let newFood = ' '

function newFoodHandler(e){
    newFood= e.target.value
    console.log(newFood)
}
function addNewfood(){
    let newPara = document.createElement('p')
    newPara.textContent = newFood

    foodList.appendChild(newPara)
    inputField.value = ' '
}

inputField.addEventListener('change', newFoodHandler)

foodbtn.addEventListener('click', addNewfood)