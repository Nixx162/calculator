let expr = "";
let inp = "";
updateInput();

function operate(exp, op) {
    if (exp[exp.length-1] === "+") {
        return Number(op) + Number(expr.slice(0,expr.length-2));
    } else if (exp[exp.length-1] === "-") {
        return Number(op) - Number(expr.slice(0,expr.length-2));
    } else if (exp[exp.length-1] === "×") {
        return Number(op) * Number(expr.slice(0,expr.length-2));
    } else if (exp[exp.length-1] === "÷") {
        return Number(op) / Number(expr.slice(0,expr.length-2));
    }
}

function updateExpr() {
    let elem = document.querySelector(".expr");
    elem.textContent = expr;
}

function updateInput() {
    let elem = document.querySelector(".input");
    elem.textContent = Number(inp);
}

function addInput(e) {
    console.log(e.srcElement.classList[0]);
    if (e.srcElement.classList[0] == "buttonsq") {
        if (e.srcElement.innerText === ".") {
            if (inp[inp.length-1]===".") return;
            if (inp.length===0) inp+="0"
        }
        inp += e.srcElement.innerText;
        console.log(inp);
        updateInput();
    } else if (e.srcElement.classList[0] == "clear") {
        expr = "";
        inp = "";
        updateExpr();
        updateInput();
    } else if (e.srcElement.classList[0] == "delete") {
        inp = inp.slice(0,inp.length-1);
        updateInput();
    } else if (e.srcElement.classList[0] == "op") {
        if (e.srcElement.innerText === "=") {
            if (inp!=="" && expr!=="" && expr[expr.length-1]!=="=") {
                let out = operate(expr, inp);
                expr += (" " + inp + " =");
                inp = out.toString();
                updateInput();
                console.log(inp);
            }
        } else {
            if (inp!=="") {
                if (expr==="" || expr[expr.length-1]==="=") {
                    expr = inp + " " + e.srcElement.innerText;
                    inp = "";
                } else {
                    let out = operate(expr, inp);
                    expr = out + " " + e.srcElement.innerText;
                    inp = "";
                }
            }
        }
        updateExpr();
    }

}


let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', addInput));