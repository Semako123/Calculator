let button = document.querySelectorAll(".digits button")
let displayEq = []
let equation = document.querySelector(".equation")
let answer = document.querySelector(".answer")
let symbols = document.querySelectorAll(".symbols button")
let SYMBOLS = ["*", "+", "-", "/"] 
let deleteButton = symbols[0]
let solveButton = button[11]

function addition(x, y)
{
    return x + y;
}

function subtraction(x, y)
{
    return x - y;
}

function division(x, y)
{
    return x / y;
}

function multiplication(x, y)
{
    return x * y;
}

function solve()
{
    if (SYMBOLS.includes( displayEq[displayEq.length-1]))
    {
        return;
    }
    let temp = ""
    let numbers = []
    let symbols = []
    for (let i = 0; i < displayEq.length; i++)
    {
        if (Number.isInteger(Number.parseInt(displayEq[i])) || displayEq[i] == ".")
        {
            temp += displayEq[i]
        }
        else
        {
            numbers.push(Number.parseFloat(temp))
            temp = ""
            symbols.push(displayEq[i])
        }
        if (i == displayEq.length - 1)
        {
            numbers.push(Number.parseFloat(temp))
            temp = ""
        }
    }

    let answer2 = numbers[0]

    for (let i = 1; i < numbers.length; i += 1)
    {
        switch(symbols[i - 1])
        {
            case("+"):
                answer2 = addition(answer2, numbers[i])
                break;
            case("-"):
                answer2 = subtraction(answer2, numbers[i])
                break;
            case("/"):
                answer2 = division(answer2, numbers[i])
                break;
            case("*"):
                answer2 = multiplication(answer2, numbers[i])
                break;
        }
    }

    answer.textContent = answer2
}

function Delete()
{
    displayEq.pop()
    equation.textContent = displayEq.join("")
}

function clear()
{
    answer.textContent = 0
    displayEq = []
    equation.textContent = displayEq.join("")
}

function storeValue(b)
{
    answer.textContent = 0
    displayEq.push(button[b].textContent)
    equation.textContent = displayEq.join("")
}

function addSymbol(b)
{
    answer.textContent = 0
    if (SYMBOLS.includes(displayEq[displayEq.length-1]))
    {
        displayEq.pop()   
        displayEq.push(symbols[b].textContent)
        equation.textContent = displayEq.join("")
    }
    else
    {
        displayEq.push(symbols[b].textContent)
        equation.textContent = displayEq.join("")
    }
}

solveButton.addEventListener("click", solve)

deleteButton.addEventListener("dblclick", clear)

deleteButton.addEventListener("click", Delete)

for (let i = 0, n = button.length - 1; i < n; ++i)
{
    let b = i;
    button[i].addEventListener("click", function(){storeValue(b)})
}

for (let i = 1; i < symbols.length; ++i)
{
    let b = i;
     symbols[i].addEventListener("click", function(){addSymbol(b)})
}
