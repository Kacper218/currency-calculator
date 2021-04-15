let amountElement = document.querySelector(".js-amount")
let exchangeElement = document.querySelector(".js-exchange")
let formElement = document.querySelector(".js-form")
let scoreElement = document.querySelector(".js-score")
let selectElement = document.querySelector(".js-select")
let exchangeText = document.querySelector(".js-exchangeText")
let finalAmountElement = document.querySelector(".js-finalAmount")
let finalCurrencyElement = document.querySelector(".js-finalCurrency")

let body = document.querySelector(".body")
let formFieldset = document.querySelector(".form__fieldset")
let formLegend = document.querySelector(".form__legend")
let formButton = document.querySelector(".form__button")
let formScore = document.querySelector(".form__score")

selectElement.addEventListener("click", () => {
    switch (selectElement.value) {
        case "euro":
            exchangeText.innerText = "Podaj aktualny kurs euro";
            finalCurrencyElement.innerText = "euro"
            exchangeElement.value = 4.51;
            formFieldset.classList.toggle("form__fieldset--gothic")
            formLegend.classList.toggle("form__legend--gothic")
            formButton.classList.toggle("form__button--gothic")
            formScore.classList.toggle("form__score--gothic")
            body.classList.toggle("body--white")
            break;
        case "ruda":
            exchangeText.innerText = "Podaj aktualny kurs bryłki rudy";
            finalCurrencyElement.innerText = "bryłek rudy"
            exchangeElement.value = 21.37;
            formFieldset.classList.toggle("form__fieldset--gothic")
            formLegend.classList.toggle("form__legend--gothic")
            formButton.classList.toggle("form__button--gothic")
            formScore.classList.toggle("form__score--gothic")
            body.classList.toggle("body--white")
            break;
    }

})

formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    let amount = amountElement.value
    let exchange = exchangeElement.value

    let score = amount / exchange

    scoreElement.innerText = score.toFixed(2);
    finalAmountElement.innerText = amount;
})