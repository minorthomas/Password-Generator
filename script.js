const getInputPassword = document.querySelector("#generator-input");
const getButtonGeneratePassword = document.querySelector("#generator-button");
const getAdditionnalSection = document.querySelector("#generator-choose_additional")

const getFirstRadio = document.querySelector("#radio_first");
const getSecondRadio = document.querySelector("#radio_second");
const getThirdRadio = document.querySelector("#radio_third");
const getFourthRadio = document.querySelector("#radio_fourth");

const getFirstCheckbox = document.querySelector("#checkbox_first");
const getSecondCheckbox = document.querySelector("#checkbox_second");
const getThirdCheckbox = document.querySelector("#checkbox_third");
const getFourthCheckbox = document.querySelector("#checkbox_fourth");

const getAdditionnalError = document.querySelector("#generator-choose_additional-error");

function generatePassword(length) {
    let result = '';
    let characters = '';

    let lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
    let lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

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
    })
}

changeNumberOfCharactersAndGeneratePassword();

