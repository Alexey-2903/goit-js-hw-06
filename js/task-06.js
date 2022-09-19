const input = document.querySelector("#validation-input")

function checkValidation(event){
    if (input.value.length != Number(input.dataset.length)){
        input.classList.add("invalid");

    } else  {
        input.classList.remove("invalid");
        input.classList.add("valid")
    }
};

input.addEventListener("blur", checkValidation);