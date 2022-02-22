let count = 1
let forecast = 0

function add_element() {
    count += 1
    console.log(count)

    if (count < 17) {
        let elem = document.createElement("div")
        elem.classList.add("circle")
        document.querySelector(".row").appendChild(elem);
    } else {
        alert('You can remove only')
        count = 16
    }
}

function rem_element() {
    count -= 1
    console.log(count)

    if (count > 0) {
        let elem = document.querySelector(".circle")
        elem.remove()
    } else {
        alert('You can add only')
        count = 1
    }
}

function add_weather() {
    forecast += 1
    console.log(forecast)

    let general = document.createElement("div")
    let image = document.createElement("div")
    let temp = document.createElement("p")
    let picture = document.createElement("img")

    let class_image = document.getElementById("weather").value
    let class_text = document.getElementById("temp").value

    general.classList.add("card" + forecast)
    image.classList.add("image" + forecast)
    temp.classList.add("temp")
    temp.innerHTML = class_text + "C"

    console.log(class_image)
    if (forecast < 8) {
        switch (class_image) {
            case "sunny":
                document.querySelector(".weather").appendChild(general);
                document.querySelector(".card" + forecast).appendChild(image);
                document.querySelector(".card" + forecast).appendChild(temp);
                document.querySelector(".image" + forecast).appendChild(picture);
                picture.setAttribute("src", "./Sunny-icon.png")
                break;
            case "rainy":
                document.querySelector(".weather").appendChild(general);
                document.querySelector(".card" + forecast).appendChild(image);
                document.querySelector(".card" + forecast).appendChild(temp);
                document.querySelector(".image" + forecast).appendChild(picture);
                picture.setAttribute("src", "./rainy.png")
                break;
            default:
                break;
        }
    } else {
        alert('You can remove only')
        forecast = 8
    }
}

function rem_weather() {
    count -= 1
    console.log(count)

    if (count > 0) {
        general.remove()
        image.remove()
        temp.remove()
        picture.remove()
    } else {
        alert('You can add only')
        count = 1
    }
}