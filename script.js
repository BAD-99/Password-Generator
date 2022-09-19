const lowerCaseString = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberString = '0123456789'
const symbolString = '!@#$%^&*()-_=+[{]};:\'"\\|<,>./?'

const slider = document.querySelector('.slider')
const sliderOutput = document.getElementById('character-length-output')

const includeUpperCase = document.getElementById('checkbox-include-uppercase')
const includeLowerCase = document.getElementById('checkbox-include-lowercase')
const includeNumbers = document.getElementById('checkbox-include-numbers')
const includeSymbols = document.getElementById('checkbox-include-symbols')

const checkboxes = document.querySelectors('input [type="checkbox"]')

const generateButton = document.getElementById('generate')

slider.oninput = function(){
    sliderOutput.innerText=this.value
    var value = (this.value-this.min)/(this.max-this.min)*100
    //slightly push the number towards 50%, because the gradient does not follow the slider thumb otherwise
    value -= 50
    value *= 0.95
    value += 50
    this.style.background = 
    'linear-gradient(to right, var(--pastel-green) 0%, var(--pastel-green) ' + value + '%, var(--subcontainer-color) ' + value + '%, var(--subcontainer-color) 100% )'
}
slider.oninput()

checkboxes.array.forEach(checkbox => {
    checkbox.addEventListener('onChange',()=>{
        
    }
    
    )
});

