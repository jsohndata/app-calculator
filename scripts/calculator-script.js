/* Variables and Functions
************************************************** */
const intMemory = []
const randomInt = () => Math.floor(Math.random() * 10000)

const addGlobalEventListener = () => {
    document.addEventListener('click', e => {
        if(e.target.matches('button')) {
            const buttonValue          = e.target.value
            const buttonDataID         = e.target.dataset.id

            const display        = document.querySelector('.display')            
            const displayCurrent = ()  => display.innerHTML
            const displayLength  = ()  => display.innerHTML.length
            const displayLastChar = () => displayCurrent().slice(displayLength()-1)

            const equation        = document.querySelector('.display-equation')            
            const equationCurrent = ()  => equation.innerHTML
            const equationLength = ()   => equation.innerHTML.length
            const equationLastChar = () => equationCurrent().slice(equationCurrent()-1)
            const equationCurrentTrim = () => equation.innerHTML.slice(0,-1)

            const renderDisplay        = param => display.innerHTML = param
            const renderDisplayPlus    = param => display.innerHTML += param
            const renderEquation       = param => equation.innerHTML = param
            const renderEquationPlus   = param => equation.innerHTML += param

            switch (buttonDataID) {
                case 'number':
                    /* 
                    Check if there are any number in memory
                    Avoding: 011 
                    */
                    if (intMemory.length === "0") {
                        renderDisplay(buttonValue)
                    } else {                  
                        /*
                        Before putting in memory (cleaner equation as well) 
                        make sure to remove the math operator in the first index
                        Avoding: +500
                        */
                        if(parseInt(displayCurrent() )) {                            
                            renderDisplayPlus(buttonValue)
                            console.log ("T=>",parseInt(displayCurrent() ))
                        } else {
                            renderDisplay(' ')
                            renderDisplayPlus(buttonValue)                            
                            console.log ("F=>",parseInt(displayCurrent() ))
                            console.log ("intMemory=>", intMemory)
                        }
                    }
                    break;
                


                case 'decimal':
                    /* 
                    Search string, see if there are other decimal.
                    Only render one decimal, 
                    Avoiding: 1.....5 
                    */
                    if (displayLastChar() !== ".")
                    {                        
                        if (displayLastChar() >= 0) {
                            renderDisplayPlus(buttonValue)
                        } else {
                            /* 
                            if the last char is a math operator 
                            append a 0 before the period
                            Avoiding: 7+. 
                            */
                            renderDisplayPlus('0.')
                        }
                    } else null
                    break;
                


                case 'random': 
                    /* 
                    If there is 0 on display remove the leading zero.
                    Avoding: 011 
                    */

                    /* 
                    Check if it's initial input
                    Avoding: 011 
                    */
                    if (displayCurrent() === "0") {
                        renderDisplay(randomInt())
                    } else {                  
                        /*
                        Before putting in memory (cleaner equation as well) 
                        make sure to remove the math operator in the first index
                        Avoding: +500
                        */
                        if(parseInt(displayCurrent() )) {                            
                            renderDisplayPlus(randomInt())
                            console.log ("T=>",parseInt(displayCurrent() ))
                        } else {
                            renderDisplay(' ')
                            renderDisplayPlus(randomInt())                            
                            console.log ("F=>",parseInt(displayCurrent() ))
                            console.log ("intMemory=>", randomInt())
                        }
                    }
                    break;



                case 'operator':
                    /* 
                    Check if the last character is not a math operator. 
                    Append a math operator.
                    Avoding: 7++++ 
                    */
                     if(displayLastChar() >= 0) {
                        intMemory.push(displayCurrent() )
                        renderEquationPlus(`${displayCurrent()} ${buttonValue} `)
                        console.log(intMemory)
                        renderDisplay(buttonValue)
                    } else null

                    break;                    
                    


                case 'clear': 
                    intMemory.length=0
                    renderEquation(' ')
                    renderDisplay(0)
                    break;
                


                case 'delete': 
                    renderDisplay(displaySansLastChar)
                    /* 
                    Make sure display doesn't go down to null. 
                    */
                    displayLength() <= 1 ? renderDisplay(0) : null
                    break;



                case 'calculate': 
                    /* Move the last displayCurrent to the eqaution
                    to be calculated */
                    renderEquationPlus(displayCurrent())
                    
                    

                    renderDisplay(stringMath(equationCurrent()))

                    
                    
                    console.log("intMemory =>", intMemory)
                    console.log("displayLastChar =>", displayLastChar())    
                    console.log("equation current =>", equationCurrent())
                    console.log("equation last char =>", equationLastChar())
                    console.log("equation trim =>", equationCurrentTrim() )
                    intMemory.length=0
                    console.log("intMemory Now =>", intMemory)
                    break;
            }
        }
    })
}


/* Action
************************************************** */
try { addGlobalEventListener() } catch(err) { throw err }