const screen = document.querySelector('.screen')
const numInput = document.getElementById('numkeys');
let currentInput = ''

numInput.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        const value = event.target.textContent;
       
        if(value === '='){
            try{
                currentInput = eval(currentInput).toString();
                screen.textContent = currentInput;
            }
            catch{
                screen.textContent = 'ERROR';
                currentInput = '';
            }
        }

        else if(value === 'CE' ){
            currentInput = '';
            screen.textContent = '0';
        }
        else{
            console.log(value);
            screen.textContent += value
            currentInput += value;
        } 
    }

    
});

