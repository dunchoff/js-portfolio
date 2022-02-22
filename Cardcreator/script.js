let number = document.getElementById('number');
let host_name = document.getElementById('name');
let month = document.getElementById('date')
let year = document.getElementById('year')
let type = document.getElementById('type')
let card_number = document.getElementById('card_number')
let card_name = document.getElementById('card_name')
let card_month = document.getElementById('card_month')
let card_year = document.getElementById('card_year')

number.addEventListener('keyup', setNumber)
host_name.addEventListener('keyup', setName)
month.addEventListener('mouseup', setMonth)
year.addEventListener('mouseup', setYear)

function isNum(num) {
    return !/[^.[0-9, " "]]*/.test(num);
}

function check_bank(e) {
    if (e.includes("5168")) {
        type.innerHTML = "VISA"
    }
    else if (e.includes("4149")) {
        type.innerHTML = "MASTER CARD"
    }
    else {
        type.innerHTML = "DISCOVER"
    }
}

function setNumber(e) {
    e.preventDefault

    if (isNum(number.value)) {
        card_number.innerHTML = number.value
    }
    else
    {
        alert ('only numbers')
    }

    check_bank(number.value)
}

function setName(e) {
    e.preventDefault
    
    card_name.innerHTML = host_name.value
}

function setMonth(e) {
    e.preventDefault
    
    card_month.innerHTML = month.options[month.selectedIndex].value

    console.log(month.value)
}

function setYear(e) {
    e.preventDefault
    
    card_year.innerHTML = year.options[year.selectedIndex].text
}