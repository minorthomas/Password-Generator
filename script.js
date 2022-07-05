const getInputPassword = document.querySelector("#password_generator-input");
const getButtonGeneratePassword = document.querySelector("#password_generator-button");

const getFirstRadio = document.querySelector("#password_generator-radio-first");
const getSecondRadio = document.querySelector("#password_generator-radio-second");
const getThirdRadio = document.querySelector("#password_generator-radio-third");
const getFourthRadio = document.querySelector("#password_generator-radio-fourth");

function generatePassword(length) {
    let result = '';
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_:().";
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

