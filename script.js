const lowerCaseString = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberString = '0123456789'
const symbolString = '!@#$%^&*()-_=+[{]};:\'"\\|<,>./?'

const stringOutput = document.getElementById('string')

const slider = document.querySelector('.slider')
const sliderOutput = document.getElementById('character-length-output')

const strengthOutput = document.getElementById('strength-output')

const includeUpperCase = document.getElementById('checkbox-include-uppercase')
const includeLowerCase = document.getElementById('checkbox-include-lowercase')
const includeNumbers = document.getElementById('checkbox-include-numbers')
const includeSymbols = document.getElementById('checkbox-include-symbols')

const checkboxes = document.querySelectorAll('input[type="checkbox"]')

const generateButton = document.getElementById('generate')

slider.oninput = function () {
    sliderOutput.innerText = this.value
    var value = (this.value - this.min) / (this.max - this.min) * 100
    //slightly push the number towards 50%, because the gradient does not follow the slider thumb otherwise
    value -= 50
    value *= 0.95
    value += 50
    this.style.background =
        'linear-gradient(to right, var(--pastel-green) 0%, var(--pastel-green) ' + value + '%, var(--subcontainer-color) ' + value + '%, var(--subcontainer-color) 100% )'
}

slider.oninput()

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        var anyChecked = false
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                anyChecked = true;
                break
            }
        }
        if (!anyChecked) checkbox.checked = true;
    }

    )
});

function generateString() {
    var paletteString = ''
    var strmodifier = 0
    if (includeUpperCase.checked) { paletteString += upperCaseString; strmodifier += 0.01 }
    if (includeLowerCase.checked) { paletteString += lowerCaseString; strmodifier += 0.01 }
    if (includeNumbers.checked) { paletteString += numberString; strmodifier += 0.015 }
    if (includeSymbols.checked) { paletteString += symbolString; strmodifier += 0.025 }
    var pass = ''
    for (let i = 0; i < slider.value; i++) {
        pass += paletteString[Math.floor(Math.random() * paletteString.length)]
    }
    stringOutput.innerText = pass
    strmodifier *= slider.value
    if (strmodifier >= 1) { strengthOutput.innerText = 'STRONG'; return }
    if (strmodifier >= 0.5) { strengthOutput.innerText = 'NORMAL'; return }
    strengthOutput.innerText = 'WEAK';
}

generateButton.addEventListener('click', generateString)

generateString()