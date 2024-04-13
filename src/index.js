




const getSchemeBtn = document.getElementById("get-scheme")


getSchemeBtn.addEventListener("click", getColorScheme)

function getColorScheme() {
    const colorPicker = document.getElementById("color")
    const colorPicked = colorPicker.value.slice(1)
    const schemeTypePicker = document.getElementById("scheme")
    const schemeType = schemeTypePicker.value
    const qParams = "?hex="+ colorPicked + "&mode=" + schemeType
    console.log(qParams)
    fetch("https://www.thecolorapi.com/scheme"+qParams, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            buildColorTable(data)
        })
        
    
}

function buildColorTable(colorData) {
    //Get the div from the html
    const colorDiv = document.getElementById("colorList")
    //Get the colors from the returned object
    const colors = colorData.colors
    let html = ""
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
        pText.textContent = colorValue.slice(0)
        containerDiv.appendChild(pText)
        colorDiv.appendChild(containerDiv)
        console.log(color.hex.value)
        
    });
}
/*
{
    "mode": "monochrome",
    "count": 5,
    "colors": [
        {
            "hex": {
                "value": "#7A0A0A",
                "clean": "7A0A0A"
            },
            "rgb": {
                "fraction": {
                    "r": 0.47843137254901963,
                    "g": 0.0392156862745098,
                    "b": 0.0392156862745098
                },
                "r": 122,
                "g": 10,
                "b": 10,
                "value": "rgb(122, 10, 10)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.8484848484848484,
                    "l": 0.25882352941176473
                },
                "h": 0,
                "s": 85,
                "l": 26,
                "value": "hsl(0, 85%, 26%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.9180327868852458,
                    "v": 0.47843137254901963
                },
                "value": "hsv(0, 92%, 48%)",
                "h": 0,
                "s": 92,
                "v": 48
            },
            "name": {
                "value": "Dark Burgundy",
                "closest_named_hex": "#770F05",
                "exact_match_name": false,
                "distance": 757
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.9180327868852459,
                    "y": 0.9180327868852459,
                    "k": 0.5215686274509803
                },
                "value": "cmyk(0, 92, 92, 52)",
                "c": 0,
                "m": 92,
                "y": 92,
                "k": 52
            },
            "XYZ": {
                "fraction": {
                    "X": 0.21840705882352943,
                    "Y": 0.13259294117647058,
                    "Z": 0.05118274509803922
                },
                "value": "XYZ(22, 13, 5)",
                "X": 22,
                "Y": 13,
                "Z": 5
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=7A0A0A",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=7A0A0A"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=7A0A0A"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#AA0E0E",
                "clean": "AA0E0E"
            },
            "rgb": {
                "fraction": {
                    "r": 0.6666666666666666,
                    "g": 0.054901960784313725,
                    "b": 0.054901960784313725
                },
                "r": 170,
                "g": 14,
                "b": 14,
                "value": "rgb(170, 14, 14)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.8478260869565216,
                    "l": 0.3607843137254902
                },
                "h": 0,
                "s": 85,
                "l": 36,
                "value": "hsl(0, 85%, 36%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.9176470588235294,
                    "v": 0.6666666666666666
                },
                "value": "hsv(0, 92%, 67%)",
                "h": 0,
                "s": 92,
                "v": 67
            },
            "name": {
                "value": "Tamarillo",
                "closest_named_hex": "#991613",
                "exact_match_name": false,
                "distance": 1124
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.9176470588235294,
                    "y": 0.9176470588235294,
                    "k": 0.33333333333333337
                },
                "value": "cmyk(0, 92, 92, 33)",
                "c": 0,
                "m": 92,
                "y": 92,
                "k": 33
            },
            "XYZ": {
                "fraction": {
                    "X": 0.30447607843137253,
                    "Y": 0.18496313725490196,
                    "Z": 0.07159529411764706
                },
                "value": "XYZ(30, 18, 7)",
                "X": 30,
                "Y": 18,
                "Z": 7
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=AA0E0E",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=AA0E0E"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=AA0E0E"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#DA1010",
                "clean": "DA1010"
            },
            "rgb": {
                "fraction": {
                    "r": 0.8549019607843137,
                    "g": 0.06274509803921569,
                    "b": 0.06274509803921569
                },
                "r": 218,
                "g": 16,
                "b": 16,
                "value": "rgb(218, 16, 16)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.8632478632478633,
                    "l": 0.4588235294117647
                },
                "h": 0,
                "s": 86,
                "l": 46,
                "value": "hsl(0, 86%, 46%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.926605504587156,
                    "v": 0.8549019607843137
                },
                "value": "hsv(0, 93%, 85%)",
                "h": 0,
                "s": 93,
                "v": 85
            },
            "name": {
                "value": "Crimson",
                "closest_named_hex": "#DC143C",
                "exact_match_name": false,
                "distance": 2230
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.926605504587156,
                    "y": 0.926605504587156,
                    "k": 0.14509803921568631
                },
                "value": "cmyk(0, 93, 93, 15)",
                "c": 0,
                "m": 93,
                "y": 93,
                "k": 15
            },
            "XYZ": {
                "fraction": {
                    "X": 0.3863247058823529,
                    "Y": 0.23115764705882352,
                    "Z": 0.08361803921568628
                },
                "value": "XYZ(39, 23, 8)",
                "X": 39,
                "Y": 23,
                "Z": 8
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=DA1010",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=DA1010"
            },
            "contrast": {
                "value": "#ffffff"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=DA1010"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#F12D2D",
                "clean": "F12D2D"
            },
            "rgb": {
                "fraction": {
                    "r": 0.9450980392156862,
                    "g": 0.17647058823529413,
                    "b": 0.17647058823529413
                },
                "r": 241,
                "g": 45,
                "b": 45,
                "value": "rgb(241, 45, 45)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.8749999999999999,
                    "l": 0.5607843137254902
                },
                "h": 0,
                "s": 87,
                "l": 56,
                "value": "hsl(0, 87%, 56%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.8132780082987552,
                    "v": 0.9450980392156862
                },
                "value": "hsv(0, 81%, 95%)",
                "h": 0,
                "s": 81,
                "v": 95
            },
            "name": {
                "value": "Pomegranate",
                "closest_named_hex": "#F34723",
                "exact_match_name": false,
                "distance": 960
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.8132780082987552,
                    "y": 0.8132780082987552,
                    "k": 0.05490196078431375
                },
                "value": "cmyk(0, 81, 81, 5)",
                "c": 0,
                "m": 81,
                "y": 81,
                "k": 5
            },
            "XYZ": {
                "fraction": {
                    "X": 0.48471725490196077,
                    "Y": 0.3398807843137255,
                    "Z": 0.20701098039215687
                },
                "value": "XYZ(48, 34, 21)",
                "X": 48,
                "Y": 34,
                "Z": 21
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=F12D2D",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=F12D2D"
            },
            "contrast": {
                "value": "#000000"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=F12D2D"
                }
            },
            "_embedded": {}
        },
        {
            "hex": {
                "value": "#F55C5C",
                "clean": "F55C5C"
            },
            "rgb": {
                "fraction": {
                    "r": 0.9607843137254902,
                    "g": 0.3607843137254902,
                    "b": 0.3607843137254902
                },
                "r": 245,
                "g": 92,
                "b": 92,
                "value": "rgb(245, 92, 92)"
            },
            "hsl": {
                "fraction": {
                    "h": 0,
                    "s": 0.8843930635838154,
                    "l": 0.6607843137254902
                },
                "h": 0,
                "s": 88,
                "l": 66,
                "value": "hsl(0, 88%, 66%)"
            },
            "hsv": {
                "fraction": {
                    "h": 0,
                    "s": 0.6244897959183674,
                    "v": 0.9607843137254902
                },
                "value": "hsv(0, 62%, 96%)",
                "h": 0,
                "s": 62,
                "v": 96
            },
            "name": {
                "value": "Carnation",
                "closest_named_hex": "#F95A61",
                "exact_match_name": false,
                "distance": 337
            },
            "cmyk": {
                "fraction": {
                    "c": 0,
                    "m": 0.6244897959183673,
                    "y": 0.6244897959183673,
                    "k": 0.039215686274509776
                },
                "value": "cmyk(0, 62, 62, 4)",
                "c": 0,
                "m": 62,
                "y": 62,
                "k": 4
            },
            "XYZ": {
                "fraction": {
                    "X": 0.5903654901960784,
                    "Y": 0.4883443137254902,
                    "Z": 0.4044741176470588
                },
                "value": "XYZ(59, 49, 40)",
                "X": 59,
                "Y": 49,
                "Z": 40
            },
            "image": {
                "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=F55C5C",
                "named": "https://www.thecolorapi.com/id?format=svg&hex=F55C5C"
            },
            "contrast": {
                "value": "#000000"
            },
            "_links": {
                "self": {
                    "href": "/id?hex=F55C5C"
                }
            },
            "_embedded": {}
        }
    ],
    "seed": {
        "hex": {
            "value": "#F01414",
            "clean": "F01414"
        },
        "rgb": {
            "fraction": {
                "r": 0.9411764705882353,
                "g": 0.0784313725490196,
                "b": 0.0784313725490196
            },
            "r": 240,
            "g": 20,
            "b": 20,
            "value": "rgb(240, 20, 20)"
        },
        "hsl": {
            "fraction": {
                "h": 0,
                "s": 0.88,
                "l": 0.5098039215686274
            },
            "h": 0,
            "s": 88,
            "l": 51,
            "value": "hsl(0, 88%, 51%)"
        },
        "hsv": {
            "fraction": {
                "h": 0,
                "s": 0.9166666666666667,
                "v": 0.9411764705882353
            },
            "value": "hsv(0, 92%, 94%)",
            "h": 0,
            "s": 92,
            "v": 94
        },
        "name": {
            "value": "Red Ribbon",
            "closest_named_hex": "#ED0A3F",
            "exact_match_name": false,
            "distance": 2418
        },
        "cmyk": {
            "fraction": {
                "c": 0,
                "m": 0.9166666666666667,
                "y": 0.9166666666666667,
                "k": 0.05882352941176472
            },
            "value": "cmyk(0, 92, 92, 6)",
            "c": 0,
            "m": 92,
            "y": 92,
            "k": 6
        },
        "XYZ": {
            "fraction": {
                "X": 0.43034509803921567,
                "Y": 0.2618509803921569,
                "Z": 0.10206274509803921
            },
            "value": "XYZ(43, 26, 10)",
            "X": 43,
            "Y": 26,
            "Z": 10
        },
        "image": {
            "bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=F01414",
            "named": "https://www.thecolorapi.com/id?format=svg&hex=F01414"
        },
        "contrast": {
            "value": "#000000"
        },
        "_links": {
            "self": {
                "href": "/id?hex=F01414"
            }
        },
        "_embedded": {}
    },
    "image": {
        "bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=F01414&mode=monochrome&count=5",
        "named": "https://www.thecolorapi.com/scheme?format=svg&hex=F01414&mode=monochrome&count=5"
    },
    "_links": {
        "self": "/scheme?hex=F01414&mode=monochrome&count=5",
        "schemes": {
            "monochrome": "/scheme?hex=F01414&mode=monochrome&count=5",
            "monochrome-dark": "/scheme?hex=F01414&mode=monochrome-dark&count=5",
            "monochrome-light": "/scheme?hex=F01414&mode=monochrome-light&count=5",
            "analogic": "/scheme?hex=F01414&mode=analogic&count=5",
            "complement": "/scheme?hex=F01414&mode=complement&count=5",
            "analogic-complement": "/scheme?hex=F01414&mode=analogic-complement&count=5",
            "triad": "/scheme?hex=F01414&mode=triad&count=5",
            "quad": "/scheme?hex=F01414&mode=quad&count=5"
        }
    },
    "_embedded": {}
}
*/