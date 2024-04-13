// The button that does the thing
const getSchemeBtn = document.getElementById("get-scheme")
getSchemeBtn.addEventListener("click", getColorScheme)

//Make a call with the defaults, just so there isn't a blank page
getColorScheme()

//The API call
function getColorScheme() {
    //get the currently specified color from the color picker
    const colorPicker = document.getElementById("color")
    const colorPicked = colorPicker.value.slice(1)
    //get the schema type from the list
    const schemeTypePicker = document.getElementById("scheme")
    const schemeType = schemeTypePicker.value
    //get the query params from the UI
    const qParams = "?hex="+ colorPicked + "&mode=" + schemeType
    //The actual call to the color API, with some query params
    fetch("https://www.thecolorapi.com/scheme"+qParams, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            buildColorTable(data)
        })
}

function buildColorTable(colorData) {
    //Get the div from the html
    const colorDiv = document.getElementById("colorList")
    destroyColorTable(colorDiv)
    //Get the colors from the returned object
    const colors = colorData.colors
    //iterate through them
    colors.forEach(color => {
        const colorValue = color.hex.value
        const containerDiv = document.createElement('div')
        containerDiv.classList.add("color-container")
        const individualDiv = document.createElement('div')
        individualDiv.style.backgroundColor = colorValue
        individualDiv.classList.add("color-div")
        containerDiv.appendChild(individualDiv)
        const pText = document.createElement('p')
        pText.textContent = colorValue
        containerDiv.appendChild(pText)
        colorDiv.appendChild(containerDiv)
        
    });
}

function destroyColorTable(div) {
    div.innerHTML = ""
}