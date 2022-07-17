window.addEventListener("load", () => {

    const addNmber = document.querySelector(".addNumber");

    const input = document.createElement("input");
    input.className = "number";
    input.placeholder = "Enter your cell in 000-000-00-00 format";

    let numberFormat = /\d{3}-\d{3}-\d{2}-\d{2}/;

    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.innerText = "You entered wrong number format :(";

    const button = document.createElement("button");
    button.type = "submit";
    button.className = "button";
    button.innerText = "Submit";

    addNmber.append(input);
    addNmber.append(button);


    button.onclick = () => {
        let inputValue = input.value;
        let formatCheck = numberFormat.test(inputValue);
        
        if (formatCheck) {
            document.location = "https://d.newsweek.com/en/full/1506960/rick-morty-season-4-release-date.webp?w=790&f=d06360035fd9101f77dcd67549c746fc";
            console.log("True");
        } else {
            addNmber.insertBefore(errorMessage, input);
            input.value = "";
            input.placeholder = "Input number should be like 000-000-00-00";
            console.log("False");
        };
        console.log(formatCheck);
    };



});