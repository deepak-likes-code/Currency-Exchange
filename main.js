

// Get the DOM elements



let currency1 = document.getElementById('currency-1')
let currency2 = document.getElementById('currency-2')
let amount1 = document.getElementById('amount-1')
let amount2 = document.getElementById('amount-2')

let swapBtn = document.getElementById('swap')
let rateTxt = document.getElementById('rate')


// Functions
calculate()

function calculate() {
    const currency1Name = currency1.value;
    const currency2Name = currency2.value;

    fetch(`https://v6.exchangerate-api.com/v6/03ea5e856ace605883cee722/latest/${currency1Name}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency2Name]

            rateTxt.innerText = `1 ${currency1Name}=${rate} ${currency2Name}`

            amount2.value = (amount1.value * rate).toFixed(2)
        })
}

function swap() {
    const temp = currency1.value;
    currency1.value = currency2.value
    currency2.value = temp
    calculate()
}




// Add event Listeners
currency1.addEventListener('change', calculate)
amount1.addEventListener('input', calculate)
currency2.addEventListener('change', calculate)
amount2.addEventListener('input', calculate)

swapBtn.addEventListener('click', swap)