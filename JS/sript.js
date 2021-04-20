{
    const gothicThemeToggle = (formFieldset, formLegend, formButton, formScore, body) => {
        formFieldset.classList.toggle("form__fieldset--gothic")
        formLegend.classList.toggle("form__legend--gothic")
        formButton.classList.toggle("form__button--gothic")
        formScore.classList.toggle("form__score--gothic")
        body.classList.toggle("body--white")
    }
    const pickCurrency = () => {

        const body = document.querySelector(".body")
        const formFieldset = document.querySelector(".form__fieldset")
        const formLegend = document.querySelector(".form__legend")
        const formButton = document.querySelector(".form__button")
        const formScore = document.querySelector(".form__score")

        const selectElement = document.querySelector(".js-select")
        const finalCurrencyElement = document.querySelector(".js-finalCurrency")
        const exchangeElement = document.querySelector(".js-exchange")
        const exchangeText = document.querySelector(".js-exchangeText")

        switch (selectElement.value) {
            case "euro":
                exchangeText.innerText = "Podaj aktualny kurs euro";
                finalCurrencyElement.innerText = "euro"
                gothicThemeToggle(formFieldset, formLegend, formButton, formScore, body);
                return exchangeElement.value = 4.51;
            case "ruda":
                exchangeText.innerText = "Podaj aktualny kurs bryłki rudy";
                finalCurrencyElement.innerText = "bryłek rudy"
                gothicThemeToggle(formFieldset, formLegend, formButton, formScore, body);
                return exchangeElement.value = 21.37;
        }
    }
    const calculateResault = (event) => {
        event.preventDefault()

        const amountElement = document.querySelector(".js-amount")
        const exchangeElement = document.querySelector(".js-exchange")
        const score = amountElement.value / exchangeElement.value
        const scoreElement = document.querySelector(".js-score")
        const finalAmountElement = document.querySelector(".js-finalAmount")

        scoreElement.innerText = score.toFixed(2);
        finalAmountElement.innerText = amountElement.value;
    }
    const init = () => {

        const formElement = document.querySelector(".js-form")
        const selectElement = document.querySelector(".js-select")

        selectElement.addEventListener("change", pickCurrency)

        formElement.addEventListener("submit", calculateResault)
    }
    init();
}