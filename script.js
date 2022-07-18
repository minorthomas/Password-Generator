//get elements
const getInputPassword = document.querySelector(".generator_password_input");
const getButtonGeneratePassword = document.querySelector(".generator_password_button");
const getAdditionnalSection = document.querySelector(".generator_choose_additional")
const getAdditionnalError = document.querySelector(".generator_choose_additional_error");
const getCopyButton = document.querySelector(".generator_password_copy");

const getFirstRadio = document.querySelector("#radio_first");
const getSecondRadio = document.querySelector("#radio_second");
const getThirdRadio = document.querySelector("#radio_third");
const getFourthRadio = document.querySelector("#radio_fourth");

const getFirstCheckbox = document.querySelector("#checkbox_first");
const getSecondCheckbox = document.querySelector("#checkbox_second");
const getThirdCheckbox = document.querySelector("#checkbox_third");
const getFourthCheckbox = document.querySelector("#checkbox_fourth");

//all functions
function generatePassword(length) {
    let result = '';
    let characters = '';

    let lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
    let lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!\"#$%&'()*+-./;<=>?@[\\]^_`{}~";

    if (getFirstCheckbox.checked) {
        characters += lettersLowercase;
    }
    if (getSecondCheckbox.checked) {
        characters += lettersUppercase;
    }
    if (getThirdCheckbox.checked) {
        characters += numbers;
    }
    if (getFourthCheckbox.checked) {
        characters += specialCharacters;
    }

    if (getFirstCheckbox.checked === false && getSecondCheckbox.checked === false && getThirdCheckbox.checked === false && getFourthCheckbox.checked === false) {
        getAdditionnalError.style.display = "block";
        getAdditionnalError.textContent = "Veuillez sélectionner au moins un paramètre!"
    } else {
        getAdditionnalError.style.display = "none";
    }

    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.random() *
            charactersLength);
    }
    return result;
}

function changeNumberOfCharactersAndGeneratePassword() {
    getInputPassword.value = generatePassword(8);

    getButtonGeneratePassword.addEventListener("click", event => {
        event.preventDefault();

        if (getFirstRadio.checked) {
            getInputPassword.value = generatePassword(getFirstRadio.value);
        }
        else if (getSecondRadio.checked) {
            getInputPassword.value = generatePassword(getSecondRadio.value);
        }
        else if (getThirdRadio.checked) {
            getInputPassword.value = generatePassword(getThirdRadio.value);
        }
        else {
            getInputPassword.value = generatePassword(getFourthRadio.value);
        }

        getCopyButton.innerHTML = "Copier"
    })
}

function darkMode() {
    const switchMode = document.querySelector(".switch");
    const body = document.querySelector("body");

    switchMode.addEventListener("change", event => {
        event.preventDefault();

        if (event.target.checked) {
            body.setAttribute("mode", "dark");
        } else {
            body.setAttribute("mode", "light");
        }
    })
}

function copyClipboard() {
    getCopyButton.addEventListener("click", function () {
        getInputPassword.select();
        getInputPassword.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(getInputPassword.value);

        getCopyButton.innerHTML = "Copié!"
    })
}

//init function
function init() {
    darkMode();
    changeNumberOfCharactersAndGeneratePassword();
    copyClipboard();
}

init();