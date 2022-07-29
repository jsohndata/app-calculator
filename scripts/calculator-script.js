/* Variables and Functions
************************************************** */
const btnNumber = ['1','2','3','4','5','6','7','8','9','0','.']
const btnOperator = ['+','-','*','/','=','Clear']

const getCurrentNumber = window.document.querySelector('.display')
const getBtnNumber     = window.document.querySelector('.btn-number')
const getBtnOperator   = window.document.querySelector('.btnOperator')

// Listening to all the button click
const addGlobalEventListener = () => {
    document.addEventListener('click', e => {
        /* if the selector mathces  button */
        if(e.target.matches('button')) {
            const buttonValue = e.target.value
            const buttonDataID = e.target.dataset.id
            const currentDisplayHTML = getCurrentNumber.innerHTML
            
            if (buttonDataID === 'number') {
                /* if it's a zero just replace, if not appened new number */
                switch (currentDisplayHTML) {
                    case "0":
                        getCurrentNumber.innerHTML = buttonValue
                        break;
                    
                    default:
                        getCurrentNumber.innerHTML += buttonValue
                        break;
                }
                /* >> RANDOM */
            } 
            
            else if (buttonDataID === 'operator') {
                /* if the operator is equal process the result */
                switch (buttonValue) {
                    case "=":
                        getCurrentNumber.innerHTML = stringMath(currentDisplayHTML)
                        break;
                    
                    case "Clear":
                        getCurrentNumber.innerHTML = 0
                        break;                    

                    default:
                        /* Avoiding math operator repeats */
                        if (currentDisplayHTML.slice(-1) == buttonValue) null
                        else getCurrentNumber.innerHTML += buttonValue
                        break;
                }
            }
        }
    })
}

// Render various buttons
const renderBtn = (paramElement, paramArray) => {
    
    /* Erase the current innerHTML. This case "Loading..." */
    document.querySelector(paramElement).innerHTML = ""

    /* Add unique data type depending on the button array */
    let dataId
    switch (paramElement) {
        case ".btn-number":
            dataId = "number"
            break;

        case ".btn-operator":
            dataId = "operator"
            break;
    }
    
    // Render the buttons
    for (const eachIndex in paramArray) {        
        document.querySelector(paramElement).innerHTML +=
        `<div class='col-4'><button 
            class='m-2 p-3 w-100 button-effect'
            data-id='${dataId}' 
            accesskey='${paramArray[eachIndex]}' 
            value='${paramArray[eachIndex]}'>${paramArray[eachIndex]}</button>
        </div>\n`
    }
}


/* Config
************************************************** */
const config = {
    siteName: "Calculator",
    gitURL: "",
}

 
/* Action
************************************************** */
try { renderBtn('.btn-number',btnNumber) } catch(err) { throw err }
try { renderBtn('.btn-operator',btnOperator) } catch(err) { throw err }
try { addGlobalEventListener() } catch(err) { throw err }



