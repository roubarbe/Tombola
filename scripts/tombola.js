//tombola.js

class TombolaJS{
    constructor(drawingList, nbOfWinners){
        //Removes duplicates by converting to a set and back to an array;
        this.drawingList = Array.from(new Set(drawingList));
        
        //If no allowed numbers of winners are specified, it's set to the full length of the participants list
        if(nbOfWinners === undefined){
            this.nbOfWinners = this.drawingList.length;
        }
        else{
            this.nbOfWinners == nbOfWinners;
        }
        
        //Set list of drawed participants as an array;
        this.drawed = [];
    }

    draw(){
        let winner = "";
        
        if(this.drawingList.length > 1){
            let randomNumber = Math.round(Math.random() * this.drawingList.length);
            console.log(randomNumber);
            
            winner = this.drawingList.splice(randomNumber, 1).toString();
            
            this.drawed.push(winner);
            
            console.log(this.drawingList);
        }
        else if(this.drawingList.length == 1){
            winner = this.drawingList[0];
        }
        else{
            console.log("Everybody won!");
        }
    }
}