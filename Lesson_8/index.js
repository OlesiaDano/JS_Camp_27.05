window.onload = () => {

    const button = document.querySelector(".draw");


    button.onclick = function() {
        //Creating input
        let input = document.createElement("input");
        input.className = 'input';
        input.placeholder = "Enter diameter";
        input.setAttribute("style", "display: block; width: 200px; margin: 20px auto;");
        button.parentElement.append(input);
        input = document.querySelector(".input");

        //Creating submit bitton
        let submit = document.createElement("button");
        submit.className = 'submit';
        submit.innerText = "Submit";
        submit.setAttribute("style", "display: block; width: 200px; margin: 20px auto;");
        button.parentElement.append(submit);
        submit = document.querySelector(".submit");

        //Removing start button
        button.remove();

        //Creating circles
        submit.onclick = function() {
            for (let i=0; i < 100; i++) {
                const circle = document.createElement("div");
                circle.className = 'circle';
                circle.setAttribute("style", "display: block; border-radius: 50%; margin: 10px; float: left;");
                circle.style.border = `5px solid hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
                circle.style.width = input.value*2 + "px";
                circle.style.height = input.value*2 + "px";
                
                input.parentElement.append(circle);
            }
            //Clearing input value, so we cam add more circles with diff diameter
            input.value = "";
        }
    }
};

//Removing clicked circle
document.addEventListener('click', function(event) {
    if (event.target.classList.value.indexOf("circle") !== -1 ) {
        let curentCircle = event.target;
        curentCircle.remove();
    }
});
