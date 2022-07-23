// My code below 

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) { 

    event.preventDefault();

    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        alert("Please, fill all the fields");
    } else { 
        const formData = new FormData(event.currentTarget);
        let formOutPut = {};
        
        formData.forEach((value, name) => {
                formOutPut[name] = value;
            });
        event.currentTarget.reset();
        console.log(formOutPut)
    }
}