//tombola.js

class TombolaJS{
    constructor(drawingListPassed, nbOfWinners){
        //Fetch list of all participants
        // this.drawingList = drawingList;
        this.drawingList = drawingListPassed;
        
        //If no allowed numbers of winners are specified, it's set to the full length of the participants list
        if(nbOfWinners === undefined || nbOfWinners === "0" || nbOfWinners === ""){
            this.nbOfWinners = this.drawingList.length;
        }
        else{
            this.nbOfWinners = nbOfWinners;
        }
        
        //Set list of drawed participants as an array;
        this.drawed = [];
    }

    static get drawed() {
        return drawed;
    }

    static get drawingList() {
        return drawingList;
    }

    draw(){
        
        //If amount of drawed participants is smaller than the allowed number of winners
        if(this.drawed.length < this.nbOfWinners){
            
            //If the length of active participants is more than 0
            if(this.drawingList.length > 0){
                
                //Choose a random number between 0 and length of number of participants remaining
                let randomNumber = Math.floor(Math.random() * this.drawingList.length);
                
                //We're storing the winner in a variable
                let winner = this.drawingList[randomNumber].toString();

                //And now we remove this winner from the participants list
                let drawingListCopy = this.drawingList;
                this.drawingList = this.drawingList.filter(function(value, index, drawingListCopy){
                    return value != winner; 
                });
                
                //And we're inserting it into the list of drawed participants
                this.drawed.push(winner);
                
            }
            
            //If the length of the drawing list is 0, this means it's empty, so everyone won!
            else{
                console.log("Everybody won!");
            }
        }
        
        //If the length of the drawed participants equals (or is greater than?) the amount of allowed winners
        else{
            console.log("Reached possible limit of winners!");
        }
    }
}