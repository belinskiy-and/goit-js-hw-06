const formElement = document.querySelector(".login-form");

const submitAction = event => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
   
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены");
        return;
    }

    const user = {
        email: email.value,
        password: password.value,
    };
    
    console.log(user);
}
  
formElement.addEventListener("submit", submitAction);


