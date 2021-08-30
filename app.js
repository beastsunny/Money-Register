var checkBtn = document.querySelector("#check-btn")
var nextBtn = document.querySelector("#next")
var billAmt = document.querySelector("#bill-amt")
var billInput = document.querySelector(".bill-input")
var cashInput = document.querySelector(".cash-input")
var cashGiven = document.querySelector("#cash-given")
var divOutput = document.querySelector("#output")
var returnTable = document.querySelector(".return-table")
var numberNote = document.querySelectorAll(".no-of-note")

const arrayOfNotes = [2000, 500, 100, 20, 10, 5, 1]
console.log(arrayOfNotes.length)


console.log(returnTable)
console.log(billAmt)
console.log(cashGiven)
console.log(checkBtn)
console.log(nextBtn)
console.log(billInput)

returnTable.style.display = "none"
cashInput.style.display = "none"


function clickHandlerNext() {
    divOutput.style.display = "none"
    console.log("clicked")
    console.log(billAmt.value)
    if (billAmt.value > 0) {
        nextBtn.style.display = "none"
        cashInput.style.display = "block"
    } else {
        divOutput.style.display = "block"
        divOutput.innerText = "Invalid bill amount! Please Enter a valid bill amount to proceed"
    }
}


function clickHandlerCheck() {

    console.log(cashGiven.value)

    console.log("clicked")
        //const bill = billAmt.value
        //const cash = cashGiven.value
    divOutput.style.display = "none"
    returnTable.style.display = "none"

    if (Number(cashGiven.value) > Number(billAmt.value) && Number(billAmt.value) > 0) {
        returnTable.style.display = "block"
        console.log("a " + billAmt.value)
        console.log("a " + cashGiven.value)
        const amountToReturn = cashGiven.value - billAmt.value
        calculateChange(amountToReturn)
    } else {

        divOutput.style.display = "block"
        returnTable.style.display = "none"

        if (Number(cashGiven.value) < Number(billAmt.value) && Number(cashGiven.value) > 0) {
            console.log(typeof(billAmt.value))
            console.log("b " + billAmt.value)
            console.log("b " + cashGiven.value)
            divOutput.innerText = "Cash given is less than required Bill amount."
        } else if (Number(cashGiven.value) === Number(billAmt.value)) {
            divOutput.innerText = "No amount should be returned."
            console.log("c " + billAmt.value)
            console.log("c " + cashGiven.value)
        } else if (Number(billAmt.value) < 0) {
            divOutput.innerText = "Bill amount Entered is not valid. Please enter valid amount."
        } else {
            divOutput.innerText = "Cash given is not a valid amount. Please Enter the right amount"
            console.log("d " + billAmt.value)
            console.log("d " + cashGiven.value)
        }

    }
}

function calculateChange(amountToReturn) {
    let sum = 0
    for (let i = 0; i < arrayOfNotes.length; i++) {
        const noOfNotes = Math.trunc(amountToReturn / arrayOfNotes[i])
        numberNote[i].innerText = noOfNotes
        amountToReturn = amountToReturn % arrayOfNotes[i]
        sum += noOfNotes
    }
    numberNote[arrayOfNotes.length].innerText = sum
}

nextBtn.addEventListener("click", clickHandlerNext)
checkBtn.addEventListener("click", clickHandlerCheck)