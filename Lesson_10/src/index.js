window.addEventListener("DOMContentLoaded",() => {
    const btn = document.querySelector(".keys"),
        display = document.querySelector(".display > input");

    const calc = {
        value1 : "",
        value2 : "",
        operator : "",
        completed : false
    }
    //Calculation result & saved result variables & click counter for memory btn
    let calcRes = "";
    let savedRes = "";
    let counter = 1;

    btn.addEventListener("click", function (e) {
        //Blocking click outside of buttons
        if(!e.target.classList.contains("button")) return;

        //Clearing values
        if(e.target.classList.contains("clear")) {
            clear(calc, display);
            console.log("Clear result: " + "V1: " + calc.value1, "V2: " + calc.value2, "Oper: " + calc.operator, "Display: " + display.value);
        }

        //Result button
        const calcResult = document.querySelector(".orange");

        //Key for cliked buttons value
        const input = e.target.value;

        //Assigning values to variables
        if (e.target.classList.contains("black") && !e.target.classList.contains("clear")) {
            
            if (calc.value1 !== "" && calc.value2 !== "" && calc.operator !== "" && calc.completed === true) {
                clear(calc, display);
                calc.completed = false;
                calcResult.setAttribute("disabled", "");
                calc.value1 += input;
                calc.value1 = parseInt(calc.value1);
                show(calc.value1, display);
            }else if (calc.value2 === "" && calc.operator === "") {
                calc.value1 += input;
                calc.value1 = parseInt(calc.value1);
                show(calc.value1, display);
                console.log("V1: " + calc.value1, "V2: " + calc.value2, "Oper: " + calc.operator);
            }else if (calc.operator !== "") {
                calc.value2 += input;
                calc.value2 = parseInt(calc.value2);
                show(calc.value2, display);
                if (calcResult.hasAttribute("disabled")) {
                    calcResult.removeAttribute("disabled");
                }
            }
            return;
        }
        ////Assigning operator to variable
        if (e.target.classList.contains("pink") && calc.value2 === "") {
            calc.operator = input;
            return;
        }

        //Result button        
        if (e.target.classList.contains("orange")) {
            calcRes = calculator (calc.value1, calc.value2, calc.operator);
            show(calcRes, display);
            calc.completed = true;
        //Result if operator pressed
        }else if (e.target.classList.contains("pink") && calc.value2 !== "") {
            calcRes = calculator (calc.value1, calc.value2, calc.operator);
            show(calcRes, display);
            calc.completed = true;
            calc.value1 = calcRes;
            calc.operator = input;
            calc.value2 = "";
        }
        
        //Manipulations with result...
        if (calcRes !== "" && e.target.classList.contains("pink")) {
            calc.completed = false;
            calc.value1 = calcRes;
            calc.operator = input;
            calc.value2 = "";
        }else if (savedRes !== "" && e.target.classList.contains("pink")) {
            calc.completed = false;
            calc.value1 = savedRes;
            calc.operator = input;
            calc.value2 = "";
        }

        //Adding result to memory
        const memory = document.querySelector(".memory");
        
        if (e.target.classList.contains("gray") && !e.target.classList.contains("getRes")) {
            memory.setAttribute("style", "display: block");
            savedRes = calcRes;
            console.log("calcRes: " + calcRes);
            console.log("savedRes: " + savedRes);
        }
        console.log("calcRes: " + calcRes);
        
        //Retrieving result to memory
        if (e.target.classList.contains("getRes")) {
            clear(calc, display);
            calc.completed = false;
            calcResult.setAttribute("disabled", "");
            calcRes = "";
            if(counter % 2 !== 0) {
                calc.value1 += savedRes;
                calc.value1 = parseInt(calc.value1);
                show(calc.value1, display);
                counter++;
            }else{
                //Clear memory on 2nd click
                savedRes = "";
                show(savedRes, display);
                memory.setAttribute("style", "display: none");
                counter++;
            }
        }
    })


});



//Function to display inputs & result
function show (value, el) {
 el.value = value
}

//Function to clear entered values
function clear (calc, display) {
    calc.value1 = "";
    calc.value2 = "";
    calc.operator = "";
    display.value  = "";

    return calc;
}

//Calculation function
function calculator (a, b, c) {
    if(c == "+"){
        return (a + b)
    }else if(c == "-"){
        return (a - b)
    }
    else if(c == "*"){
        return (a * b);
    }
    else if(c == "/"){
        return (a / b)
    }
}

