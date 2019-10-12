//main.js

let drawingList = [
    "Alexandre",
    "Alexandre",
    "Simon",
    "Léandre",
    "Red",
    "Green",
    "Blue",
    "Pistache",
    "Alexandre",
    "Léandre",
    "Roxanne",
    "Jean-Francois",
    "Xavier",
    "Alexandre"
];

let title = new Vue({
    el: "#title",
    data: {
        message: "Tombola"
    }
});

let formDataTypeSelect = new Vue({
    el: "#typeData",
    data:{
        selected:"0",
        options:[
            {text: "Excel file", value: "0"},
            {text: "Text", value: "1"},
            {text: "JSON file", value: "2"}
        ]
    }
});