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
            this.nbOfWinners = nbOfWinners;
        }
        
        //Set list of drawed participants as an array;
        this.drawed = [];
    }

    draw(){
        
        //If amount of drawed participants is smaller than the allowed number of winners
        if(this.drawed.length < this.nbOfWinners){
            
            //If the length of active participants is more than 0
            if(this.drawingList.length > 0){
                
                //Choose a random number between 0 and length of number of participants remaining
                let randomNumber = Math.floor(Math.random() * this.drawingList.length);

                //console.log("Length of drawingList: "+this.drawingList.length+", Number rolled: "+randomNumber);
                
                //We're storing the winner in a variable, as a return to removing it from the list of participants
                let winner = this.drawingList.splice(randomNumber, 1).toString();

                //console.log("Winner: "+winner);
                
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