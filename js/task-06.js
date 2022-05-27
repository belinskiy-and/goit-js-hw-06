const inputElement = document.querySelector("#validation-input");

const nofocusAction = event => {    
    if (event.currentTarget.value.length >= inputElement.dataset.length) {
        inputElement.classList.remove("invalid");    
        inputElement.classList.add("valid");            
    } else {
        inputElement.classList.remove("valid");    
        inputElement.classList.add("invalid");    
    }
};

inputElement.addEventListener("blur", nofocusAction);