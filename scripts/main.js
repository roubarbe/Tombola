//main.js


// let drawingList = [
//     "Alexandre",
//     "Alexandre",
//     "Simon",
//     "Léandre",
//     "Red",
//     "Green",
//     "Blue",
//     "Pistache",
//     "Alexandre",
//     "Léandre",
//     "Roxanne",
//     "Jean-Francois",
//     "Xavier",
//     "Alexandre"
// ];

let newDraw;

/*{
["Alexandre","Alexandre","Simon","Léandre","Red","Green","Blue","Pistache","Alexandre","Léandre","Roxanne","Jean-Francois","Xavier","Alexandre"]
}*/


let title = new Vue({
    el: "#title",
    data: {
        message: "Tombola"
    }
});

let formDataTypeSelect = new Vue({
    el: "#configureDrawing",
    data:{
        selected:"0",
        options:[
            {text: "Excel file", value: "0"},
            {text: "Text", value: "1"},
            {text: "JSON", value: "2"}
        ],
        selectLabel: "Choose data type:",
        nbParticipants:{
            placeholder: "",
            label: "Number of participants (all if none entered):"
        },
        participantsData:{
            placeholder: "Enter / Paste textual data here"
        },
        submitText: "Go!"
    }
});



let mainDrawing = new Vue({
    el: "#mainDrawing",
    data:{
        winners: "Winners",
        participants: "Participants",
        submit: "Draw!",
        // winnersList:[
        //     "Test",
        //     "Autre test",
        //     "Encore un autre test"
        // ]
        winnersList: [],
        participantsList: []
    },
    methods:{
        update: function(){
            //this.winnersList = newDraw.drawed;
            //this.participantsList = newDraw.drawingList;
            let newWinnersArray = newDraw.drawed;
            this.winnersList = newWinnersArray;

            let newParticipantsArray = newDraw.drawingList;
            this.participantsList = newParticipantsArray;
        },
        draw: function(){
            newDraw.draw();
            this.update();
        }
    }
});



/**
 * Starts the drawing process
 */
function startDrawing(){

    switch(document.querySelector("#typeData").value){
        case "0":
            console.log("unimplemented");
            break;
        case "1":
            console.log("unimplemented");
            break;
        case "2":
            try{
                let jsonData = JSON.parse(document.querySelector("#dataText").value);
                let nbParticipantsValue = document.querySelector("#nbParticipants").value;
                
                //Security because don't trust user inputs
                if(nbParticipantsValue == undefined){
                    nbParticipantsValue = "";
                }
                
                document.querySelector("#configureDrawing").classList.add("animated","fadeOutLeft","faster");
                document.querySelector("#configureDrawing").addEventListener('animationend', ev => {
                    document.querySelector("#configureDrawing").style.display = "none";
                    document.querySelector("#mainDrawing").style.display = "block";
                    document.querySelector("#mainDrawing").classList.add("animated","fadeInDown");
                    document.querySelector("#mainDrawing").addEventListener('animationend', ev => {
                        newDraw = new TombolaJS(jsonData, nbParticipantsValue);
                        //mainDrawing.winnersList = newDraw.drawed;
                        //mainDrawing.participantsList = newDraw.drawingList;
                        mainDrawing.update();
                        //document.querySelector("#submitButtonDiv").setAttribute("onclick","newDraw.draw()");
                    });
                    
                });
            }
            catch(e){
                console.log(e);
            }
            break;
        default:
            console.log("How were you able to submit this without a value?");
            break;
    }

    // if(document.querySelector("#typeData").value == 0){

    // }
    // if(document.querySelector("#typeData").value == 2){
    //     try{
    //         let jsonData = JSON.parse(document.querySelector("#dataText").value);
    //         document.querySelector("#configureDrawing").classList.add("animated","fadeOutLeft","faster");
    //         document.querySelector("#configureDrawing").addEventListener('animationend', ev => {

    //         });
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    // }
}