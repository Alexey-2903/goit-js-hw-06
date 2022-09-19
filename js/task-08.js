const form = document.querySelector(".login-form")
form.addEventListener("submit", inputData)

function inputData (event) {
    event.preventDefault();
    
    const {
        element: { email, password },


    } = event.currentTarget

    if (email.value === ''){
        alert("Сначала введите Email!")
        return true
    }

    if (password.value === ''){
        alert("Сначала введите Password!")
        return true;
    }

    const formDataValue = { email: email.value, password: password.value };

    event.currentTarget.reset();
    
}
