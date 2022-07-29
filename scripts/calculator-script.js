/* Variables and Functions
************************************************** */
const randomInt    = () => Math.floor(Math.random() * 10000)

const addGlobalEventListener = () => {
    document.addEventListener('click', e => {
        if(e.target.matches('button')) {
            const buttonValue         = e.target.value
            const buttonDataID        = e.target.dataset.id
            const display             = document.querySelector('.display')
            const displayCurrent      = display.innerHTML
            const displayLength       = display.innerHTML.length
            const displaySansLastChar = display.innerHTML.slice(0,-1)
            const renderDisplay       = param => display.innerHTML =  param
            const renderDisplayPlus   = param => display.innerHTML += param
            
            /* Testing Area */
            // console.log(display.innerHTML.indexOf("."))

            switch (buttonDataID) {
                case 'number':
                    /* Check if it's initial input */
                    displayCurrent === "0" ?
                        renderDisplay(buttonValue) :
                        renderDisplayPlus(buttonValue)
                    break;
                
                case 'decimal':
                    /* Search string, see if there are other decimal.
                    Only render one decimal */
                    displayCurrent.indexOf('.') === -1  ?
                        renderDisplayPlus(buttonValue) :
                        null
                    break;
                
                case 'random': 
                    /* Check if it's initial input */
                    displayCurrent === "0" ?
                        renderDisplay(randomInt()) :
                        renderDisplayPlus(randomInt())
                    break;

                case 'operator':
                    /* Check if the last character is an character equal or great than zero.
                    AKA, not a symbol. If it's a int append a symbol, if it's a symbol null
                    To avoid duplicate math operators */
                     (displayCurrent.slice(displayLength-1) >= 0) ?
                        renderDisplayPlus(buttonValue) :
                        null
                    break;                    
                    
                case 'clear': 
                    renderDisplay(0)
                    break;
                
                case 'delete': 
                    renderDisplay(displaySansLastChar)
                    /* Make sure delete doesn't go down to null. */
                    displayLength <= 1 ? renderDisplay(0) : null
                    break;

                case 'process': 
                    displayCurrent.slice(displayLength-1) >=0 ?
                        renderDisplay(stringMath(displayCurrent)) :                        
                        renderDisplay(stringMath(displaySansLastChar))
                    break;
            }
        }
    })
}


/* Action
************************************************** */
try { addGlobalEventListener() } catch(err) { throw err }