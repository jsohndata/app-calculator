/* Variables and Functions
************************************************** */
const addGlobalEventListener = () => {
    document.addEventListener('click', e => {
        if(e.target.matches('button')) {
            const buttonValue = e.target.value
            const buttonDataID = e.target.dataset.id
            const display = document.querySelector('.display')


            if (buttonDataID === 'number') {
                switch (display.innerHTML) {
                    case "0":
                        display.innerHTML = buttonValue
                        break;
                    
                    default:
                        display.innerHTML += buttonValue
                        break;
                }
            }

            if (buttonDataID === 'operator') {
                switch (buttonValue) {
                    case "0":
                        display.innerHTML = buttonValue
                        break;
                    
                    default:
                        display.innerHTML += buttonValue
                        break;
                }
            }
            
            if (buttonDataID === 'clear') display.innerHTML = 0

            if (buttonDataID === 'process') {
                display.innerHTML = stringMath(display.innerHTML)
            }
        }
    })
}


/* Action
************************************************** */

try { addGlobalEventListener() } catch(err) { throw err }



