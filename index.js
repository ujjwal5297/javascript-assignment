let screen = document.getElementById('screen');
buttons = document.querySelectorAll('calculate');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (
            parseInt(buttonText) < 0) {
            screen.value = alert('you cannot enter a negative value')
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
};

let a= parseInt(a)